'use strict';

var http = require('http'),
    server = http.createServer(),
    port = process.argv[2] || 3001,
    app = require('./app');

server.on('request', app);


server.listen(port, function() {
    console.log("I'm ready!");
});
