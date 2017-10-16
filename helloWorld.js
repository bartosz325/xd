var http = require('http');
http.createServer(function(request, response){
   response.setHeader('Content-Type', 'text/plain');
   response.write('Hello World!');
   response.end();
}).listen(8000, function(error){
   console.log((new Date()) + ' Server is listening on port 8000');
});
