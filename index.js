/*var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var a='bartosz';
  a=a.substr(1,3);
  var b='<html><head><title>dasdas</title></head><body>Hello World!'+a+' xd</body></html>';
  response.send(b);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
