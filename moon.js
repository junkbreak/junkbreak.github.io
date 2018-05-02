function createParagraph() {  
  var para = document.createElement('p');  
  para.textContent = 'You clicked the button!';  
  document.body.appendChild(para);
}
var buttons = document.querySelectorAll('button');
for(var i = 0; i < buttons.length ; i++) {  
  buttons[i].addEventListener('click', createParagraph);
}
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (request.readyState == 4 && request.status == 200) {				
    alert(request.responseText);
  }	
}	
request.open("GET", "http://naver.com");	
request.send();
