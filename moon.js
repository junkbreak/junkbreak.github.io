var sHttp = new ActiveXObject("Microsoft.xmlhttp"); 
 
function httpGet(szURL) { 
  sHttp.open("get",szURL,false); 
  sHttp.setRequestHeader( "Content-type:", "application/x-www-form-urlencoded"); 
sHttp.setRequestHeader("Content-Encoding:", "euc-kr"); 
 
 
  sHttp.onreadystatechange = onRetriveComplete; 
  try{ 
  sHttp.send("code=tnt2"); 
  } 
  catch(e) { 
      return ("Not exist"); 
  } 
 
  if (sHttp.status > 200) { 
  return("not exist<br>"); 
  } else 
 
 
  return(sHttp.responseText); 
 
} 
 
function onRetriveComplete() { 
  sHttp.onreadystatechange = noop; //re-entrant gate 
  if (sHttp.readyState == 4) { 
  } 
} 
 
function noop() { 
  return false; 
} 
 
function chk() { 
 
  getData=httpGet("http://www.naver.com"); 
 
  document.noglsForm.test.value=getData; 
 
} 
