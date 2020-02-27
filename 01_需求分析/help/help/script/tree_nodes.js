// $Id : $

var TREE_NODES = [
				['简介', "introduction/what-is-in.html", "MAIN",
				],
				['说明',"introduction/introduction-eventlog-analyzer.html", "MAIN",
					['概述', "introduction/about-eventlog-analyzer.html", "MAIN",
					],
					['发行说明', "introduction/release-notes.html", "MAIN",
					],			
				],
				['安装产品', "installation/setup-eventlog-analyzer.html", "MAIN",
					['系统要求', "installation/eventlog-system-requirements.html", "MAIN",
					],
					['安装和卸载', "installation/install-eventlog-analyzer.html", "MAIN",
					],
					['前提条件', "installation/eventlog-prerequisites.html", "MAIN",
					],
					['启动和关闭', "installation/start-eventlog-analyzer.html", "MAIN",
					],
					['访问服务器', "installation/web-eventlog-analyzer.html", "MAIN",
					],
					['许可信息', "installation/licensing-eventlog-analyzer.html", "MAIN",
					],
				],					
				['开始使用', "getting-started/get-the-log-data.html", "MAIN",
					['添加主机', "getting-started/adding-host.html", "MAIN",	
					],
					['导入应用日志', "getting-started/analyzing-application-logs.html", "MAIN"
					],
					['监视AWS EC2 Windows实例日志', "getting-started/configure-aws-instance-monitoring.html", "MAIN"
					],
					['启动MSSQL审计日志',"getting-started/enable-mssql-audit-logs.html","MAIN"
					],
					['启动IBM AS400审计日志',"getting-started/enable-ibm-as-400-audit-logs.html","MAIN"
					],
				],
				['用户界面', "working-with/ui-eventlog-analyzer.html", "MAIN",
					['标签介绍', "working-with/tabs-ui-eventlog-analyzer.html", "MAIN",			
					],
					['定制仪表板', "working-with/dashboard-views.html", "MAIN",	
					],		
				],
				['事件报表', "eventlog-reports/eventlog-reports-intro.html", "MAIN",
					['事件日志报表配置', "eventlog-reports/eventlog-reports-configuration.html", "MAIN",
					],					
					['Windows事件报表', "eventlog-reports/windows-event-reports.html", "MAIN"
					],
					['Unix事件报表', "eventlog-reports/unix-event-reports.html", "MAIN"
					],
					['应用事件报表', "eventlog-reports/application-event-reports.html", "MAIN",
					],
					['网络设备事件报表', "eventlog-reports/network-devices-event-reports.html", "MAIN",
					],
					/*['Host Log Reports', "eventlog-reports/eventlog-host-reports.html", "MAIN"
					],*/
					/*['Application Log Reports', "eventlog-reports/application-log-reports.html", "MAIN"
					],*/
					['用户活动的报表', "eventlog-reports/eventlog-puma-reports.html", "MAIN",
					],
					['排行和趋势报表', "eventlog-reports/eventlog-top-and-trend-reports.html", "MAIN",
					],
					/*['View Event Trend Reports', "eventlog-reports/eventlog-trend-reports.html", "MAIN"
					],*/
					['收藏报表', "eventlog-reports/eventlog-favourite-reports.html", "MAIN",
					],										
					/*['Ask ME Reports', "eventlog-reports/eventlog-ask-me-reports.html", "MAIN"
					],*/										
					/*['IBM AS/400 Log Reports', "eventlog-reports/eventlog-ibm-iseries-reports.html", "MAIN"
					],*/
					['创建自定义报表', "eventlog-reports/create-custom-reports.html", "MAIN"
					],
					['创建IBM iSeries主机自定义报表', "eventlog-reports/create-ibm-iseries-reports.html", "MAIN"
					],					
				],
				['文件完整性监视', "file-monitoring/fim.html", "MAIN",
					['监视文件/文件夹的变化', "file-monitoring/fim-intro.html", "MAIN"
					]
				],
				['漏洞数据分析', "vulnerability-data-analytics/vulnerability-data-analytics-intro.html", "MAIN",
					['漏洞报表', "vulnerability-data-analytics/vulnerability-reports.html", "MAIN"
					]
				],
				['风险数据分析',"threat-intelligence-data-analytics/threat-intelligence-data-analytics.html","MAIN"
				],
				['实时事件相关性', "correlation/correlation-intro.html", "MAIN",
					['管理相关规则', "correlation/manage-correlation-rules.html", "MAIN"
					],
					['会话活动', "correlation/session-activity.html", "MAIN"
					],
					['查看最近10个事件', "correlation/last-ten-incidents.html", "MAIN"
					]
				],
				['合规性报表', "compliance-reports/compliance-reports-intro.html", "MAIN",
					['PCI-DSS合规性报表', "compliance-reports/pci-dss-compliance-reports.html", "MAIN"
					],
					['HIPAA合规性报表', "compliance-reports/hipaa-compliance-reports.html", "MAIN"
					],
					['FISMA合规性报表', "compliance-reports/fisma-compliance-reports.html", "MAIN"
					],
					['SOX合规性报表', "compliance-reports/sox-compliance-reports.html", "MAIN"
					],
					['GLBA合规性报表', "compliance-reports/glba-compliance-reports.html", "MAIN"
					],
					['ISO 27001合规性报表', "compliance-reports/iso-compliance-reports.html", "MAIN"
					],
					['创建新的合规性报表', "compliance-reports/create-new-compliance-reports.html", "MAIN"
					],
				],
				['搜索日志', "search-logs/search-logs-intro.html", "MAIN",
					['如何搜索', "search-logs/how-to-search.html", "MAIN",
					],
					['如何提取新的字段', "search-logs/extract-new-fields.html", "MAIN",
					],
					['标记工具',"search-logs/tags.html","MAIN"
					]
				],
				['事件告警', "alerts/alerts-intro.html", "MAIN",
					['创建新的告警配置文件', "alerts/create-alert-profile.html", "MAIN",
					],
					['创建IBM iSeries (AS/400)告警配置文件', "alerts/create-ibm-iseries-alerts.html", "MAIN",
					],					
					['查看告警', "alerts/view-alerts.html", "MAIN",
					],
				],								
				['配置', "configurations/configurations-intro.html", "MAIN",
					['管理主机', "configurations/manage-hosts.html", "MAIN",
					],
					['管理应用', "configurations/manage-applications.html", "MAIN",
					],					
					['导入', "configurations/import-logs.html", "MAIN",
					],					
					['归档', "configurations/archive-logs.html", "MAIN",
					],					
					['报表配置文件', "configurations/report-profiles.html", "MAIN",
					],					
					['告警', "configurations/alerts.html", "MAIN",
					],					
					['数据库过滤', "configurations/noise-filter.html", "MAIN",
					],					
					['导入/导出配置文件', "configurations/export-import-profiles.html", "MAIN",
					],					
					['自定义模式', "configurations/custom-patterns.html", "MAIN",
					],
					['文件完整性监视', "configurations/file-monitoring.html", "MAIN"
					],					
					['标签', "configurations/tags.html","MAIN"
					]					
				],
				['管理设置', "admin-settings/admin-settings-intro.html", "MAIN",
					['安装代理', "admin-settings/install-agent.html", "MAIN",
					],
					['管理用户', "admin-settings/manage-user.html", "MAIN",
					],
					['数据库存储设置', "admin-settings/db-storage-settings.html", "MAIN",
					],					
					['外部认证设置', "admin-settings/external-authentication.html", "MAIN",
					],					
				],
				['系统设置', "system-settings/system-settings-intro.html", "MAIN",
					['工作时间配置', "system-settings/working-hour-settings.html", "MAIN",
					],
					['配置邮件及短信', "system-settings/configure-email-sms.html", "MAIN",
					],
					['日志分析仪的配置', "system-settings/ela-configurations.html", "MAIN",
					],
					['合规性管理', "system-settings/manage-compliance.html", "MAIN",
					],
					['日志收集的告警', "system-settings/log-collection-alert.html", "MAIN",
					],
					['服务器诊断', "system-settings/server-diagnostics.html", "MAIN",
					],
					['访问数据库', "system-settings/access-database.html", "MAIN",
					],
					['客户端换标', "system-settings/rebranding.html", "MAIN",
					],
				],
				['帮助、问题和提示', "help-menu/help-intro.html", "MAIN",
					['常见问题', "help-menu/eventlog-faq.html", "MAIN",
					],
					['故障排除', "help-menu/eventlog-tips.html", "MAIN",
					],
					['EventLog Analyzer - OpManager插件', "help-menu/eventlog-opm-plugin-tips.html", "MAIN"
					]						
				],
				['附加工具', "additional-utilities/additional-utils-intro.html", "MAIN",
					['使用SSL', "additional-utilities/eventlog-ssl-support.html", "MAIN",
					],
					['配置微软SQL Server数据库', "additional-utilities/configure-mssql-database.html", "MAIN",
					],
					['把数据从MySQL迁移到SQL Server', "additional-utilities/migrate-data-mysql-mssql.html", "MAIN",
					],
					['把数据从SQL Server迁移到MySQL', "additional-utilities/migrate-data-mssql-mysql.html", "MAIN",
					],										
					['更改服务器上数据库文件夹的位置', "additional-utilities/move-database-different-directory.html", "MAIN",
					],
					['EventLog Analyzer数据库的移动', "additional-utilities/move-installation-different-server.html", "MAIN",
					],
					['将索引迁移到新版本',"additional-utilities/migrate-indexes-to-new-version.html","MAIN"
					]
				],				
				['分布式版本 - 被管服务器', "distributed-managed-server/distributed-managed-server-intro.html", "MAIN",
					['安装被管服务器', "distributed-managed-server/install-managed-server.html", "MAIN",
					],
					['常见问题', "distributed-managed-server/managed-server-faq.html", "MAIN",
					],		
				],
				['技术支持', "support/support-intro.html", "MAIN",
				 	['联系技术支持', "support/contact-technical-support.html", "MAIN",
					],
				 	['创建支持信息文件（SIF）', "support/create-sif.html", "MAIN",
					],					
					['重置日志采集器', "support/reset-log-collector.html", "MAIN",
					],
					['日志级别设置', "support/log-level-settings.html", "MAIN",
					],				 
				],
																								
/*				
				['Generating Event Reports', "eventlog-reports/eventlog-reports-intro.html", "MAIN",
					['Viewing Events for a Host', "eventlog-reports/host-eventlogs.html", "MAIN",
					],
					['Viewing Top Hosts', "eventlog-reports/eventlog-top-hosts.html", "MAIN",
					],
					['Viewing User Acitivity (PUMA) Reports', "eventlog-reports/eventlog-puma-reports.html", "MAIN",
					],					
					['Generating Compliance Reports', "eventlog-reports/eventlog-compliance-reports.html", "MAIN"
					],
					['Adding New Compliance', "eventlog-reports/eventlog-new-compliance-reports.html", "MAIN"
					],
					['Viewing Event Trends', "eventlog-reports/eventlog-trends.html", "MAIN"
					],
					['Application Log Reports', "eventlog-reports/application-log-reports.html", "MAIN"
					],
					['IBM AS/400 Log Reports', "eventlog-reports/eventlog-ibm-as-400.html", "MAIN"
					],					
					['Creating Custom Reports', "eventlog-reports/eventlog-custom-reports.html", "MAIN"
					],
					['Creating Custom Reports for AS/400 Hosts', "eventlog-reports/eventlog-as400-custom-reports.html", "MAIN"
					],					
					['Editing Custom Reports', "eventlog-reports/edit-custom-reports.html", "MAIN"
					],
					['Reports using Advanced Search', "eventlog-reports/using-advanced-search.html", "MAIN"
					],					
				],
*/				
					
];
