function loadURL()
{
 var url = document.all.url;
 if(url.value == "") {
  alert("입력하세여");
  url.focus();
  return;
 }
 
 var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 xmlhttp.open("GET", url.value, "false");
 xmlhttp.send();
 document.all.output.innerText = xmlhttp.responseText;
}
