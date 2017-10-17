var express = require('express')
var app = express()
var req = require("tinyreq");

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    var dasd=req("http://ionicabizau.net/");
    response.send(dasd); // Print out the HTML   
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
