// $Id : $
function readfr()
{
    if(!parent.frames[0])
		var fvalue = "no";	
	else 
		var fvalue = "yes";

    var headlink = document.getElementById('header');
    if (fvalue == "yes")
        headlink.style.display = 'none';
    else 
        headlink.style.display = 'block';
}	
