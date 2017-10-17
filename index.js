var express = require('express')
var app = express()
var request = require("tinyreq");

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

request('myurl', function(err, body, xhr){
	if (err){
		//request ended badly
	}
	else{
		//rejoice!
	}
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
