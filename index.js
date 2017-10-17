var express = require('express')
var app = express()
var request = require("tinyreq");

request("http://ionicabizau.net/", function (err, body) {
    console.log(err || body); // Print out the HTML
});

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
