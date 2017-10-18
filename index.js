var express = require('express');
var http = require('http');;
var app = express();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.send('Hello World!<iframe id="lol" width="1600" height="900"><html lang="pl"><head></head><body class="index body" id="loginpage"></body></html></iframe>');
})
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var a = JSON.parse(this.responseText);
		document.getElementById('lol').contentWindow.document.head.innerHTML+=a[0];
		document.getElementById('lol').contentWindow.document.body.innerHTML+=a[1];
		xd();
    }
};
function xd() {
	document.getElementById('lol').contentWindow.document.getElementById('username_input').value='2181';
	document.getElementById('lol').contentWindow.document.getElementById('password_input').value='fro2303bog';
	//document.getElementById('lol').contentWindow.document.getElementsByClassName('submit')[0].click();
}

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
