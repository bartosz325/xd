var express = require('express');
var request = require('request');
var app = express();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
request('https://urlxray.expeditedaddons.com/?api_key=' + process.env.URLXRAY_API_KEY + '&fetch_content=false&url=http%3A%2F%2Fwww.wikipedia.org', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
app.get('/', function(request, response) {
  response.send('Hello World!');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
