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
 
  getData=httpGet("http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo?solYear=2018&solMonth=04&solDay=10&serviceKey=WjughaThdULfdkECwUvSg3aMD0iR1nDXxzk2DUSTi4Gqj%2FtaV5GPsoHLVInvNg5ZdUZx0awqPAoVinLy%2B5xcjA%3D%3D"); 
 
  document.noglsForm.test.value=getData; 
 
} 
