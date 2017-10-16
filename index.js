var express = require('express')
var app = express()
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<p>Hello world</p>`);

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var a='bartosz';
  a=a.substr(1,3);
  var b='<html><head><title>dasdas</title></head><body>Hello World!'+a+' xd</body></html>';
  c=dom.window.document.querySelector("p").textContent);
  response.send(b+'------'+c);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
