/*jshint node:true */

/* This simple example just returns static content */

var port = process.env.VCAP_APP_PORT || 3000;
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
<<<<<<< Upstream, based on f7962f02d697a2e5ee1eb8febd694acfbaa6176e
  res.end('Hello World from CloudFoundry\n');
=======
  res.end('Hello World from CloudFoundry!!\n');
>>>>>>> 004bde1 Ausrufezeichen sind wichtig!!!
}).listen(port);
