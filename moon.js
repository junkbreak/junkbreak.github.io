var request = new XMLHttpRequest();
request.onreadystatechange = function() 
{if (request.readyState == 4 && request.status == 200) 
{				alert(request.responseText);}	}	
request.open("GET", "http://naver.com");	
request.send();
