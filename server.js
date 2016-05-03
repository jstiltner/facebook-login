var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();

var options = {
  key: fs.readFileSync('/path/to/key.pem'),
  cert: fs.readFileSync('/path/to/cert.pem')
};

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);
console.log("Server up and listening on 80, securely on 443");
