package com.zhiyou100

import java.sql.{Date, Timestamp}
import java.text.SimpleDateFormat
import java.util.Calendar

import org.apache.spark.sql.hive.HiveContext
import org.apache.spark.sql.types._
import org.apache.spark.sql.{Row, SQLContext}
import org.apache.spark.{SparkConf, SparkContext}

import scala.util.matching.Regex

/**
  * Created by lijike 2017/2/28.
  * 凌晨运行
  */
object LogApp_hive {
  def main(args: Array[String]): Unit = {

    val dateFormat = new SimpleDateFormat("yyyy-MM-dd")
    var cal = Calendar.getInstance()

    val currentday = dateFormat.format(cal.getTime())
    cal.add(Calendar.DATE, -1)
    var yesterday = dateFormat.format(cal.getTime())
    //    //println(yesterday)
    //    //1.创建SparkConf()并设置App名称
    //    //setMaster("local")本地模式
    val conf = new SparkConf().setAppName("log-app").setMaster("spark://hadoop01:7077")
    //2.SparkContext
    val sc = new SparkContext(conf)
    //3.创建一个RDD
    val logRDD = sc.textFile("hdfs://hadoop01:9000/nginx/logs/2017-02-28").map(line => {
      val pattern = new Regex("\".*?\"")
      val str = (pattern findAllIn line).mkString("\t").replace("\"", "").trim +
        "\t" + line.substring(line.lastIndexOf("\"") + 1, line.length).trim.split(" ").mkString("\t").trim
      val $http_x_forwarded_for = str.substring(0, str.indexOf("\t")).split(",")(0).trim
      val other_str = str.replace(str.substring(0, str.indexOf("\t")), "").trim
      val $server = other_str.substring(0, other_str.indexOf("\t")).replace(",", "\t").trim
      val other_sub_str = other_str.substring(other_str.indexOf("\t"), other_str.length).trim
      $http_x_forwarded_for + "\t" + $server + "\t" + other_sub_str + "\t"
    }).saveAsTextFile("hdfs://hadoop01:9000/nginx/result/2017-02-27")
    //创建一个hive表t_nginx_logs
    //val sqlContext = new SQLContext(sc)
    val hiveContext = new HiveContext(sc)
    //val create_sql = "create table if not exists t_nginx_logs(\n    http_x_forwarded_for string,\n    server_addr string,\n    server_name string,\n    remote_addr string,\n    blank       string,\n    remote_user string,\n    time_local  string,\n    request     string,\n    status      int,\n    body_bytes_sent double,\n    http_referer string,\n    http_user_agent string,\n    request_time double,\n    request_length double\n)  partitioned by (datetime string) row format delimited fields terminated by '\\t'"
    val load_sql = "load data  inpath 'hdfs://hadoop01:9000/nginx/result/2017-02-27/part-*' overwrite into table t_nginx_logs partition (datetime='2017-02-27')"
    //hiveContext.sql(create_sql)
    hiveContext.sql(load_sql)
    sc.stop()
  }
}

