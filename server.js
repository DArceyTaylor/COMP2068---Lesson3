/// <reference path="_reference.ts"/>
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//main route
app.get('/', function (req, res, next) {
    //res.send('Hello Express!');
    res.sendFile(path.join(__dirname, "Public", "index.html"));
});
app.get('/info', function (req, res) {
    //res.send('Your custom infor page goes here');
    res.sendFile(path.join(__dirname, "Public", "info.html"));
});
app.listen(port, function () {
    console.log("App Server Started...on port: " + port);
});
/*
import http = require('http');

var port:number = process.env.port || 3000;

var server = http.createServer(
    function(req:http.ServerRequest, res:http.ServerResponse){
    res.writeHead(200,{'Context-Type': 'text/plain'});
    res.end("Hello Node!");
});

server.listen(port, function(){
    console.log("Server Started.... Listening on port: " + port);
});
*/ 
//# sourceMappingURL=server.js.map