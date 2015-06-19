'use strict';

var http = require('http'),
    server = http.createServer(),
    port = process.argv[2] || 3001;

server.on('request', function(req, res) {
    res.end('Hello');
});
server.listen(port, function() {
    console.log("I'm ready!");
});
