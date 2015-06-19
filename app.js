'use strict';

module.exports = function() {
    var express = require('express'),
    app = express(),
    messages = [];

    app.use('/', function(req, res, next) {
        console.log('accessed app');
        next();
    });

    app.use('/secret', function(req, res) {
        res.end('You found me!')
    });

    app.use('/api', function(req, res) {
        res.end('found api')
    });
    // /api
    app.get('/api.message', function(req, res, next) {
        res.end('messages')
    });
    app.post('/api.message', function(req, res) {
        var msg = '';
        req.on('data', function(chunk) {
            msg += chunk.toString('utf-8');
        });
        req.on('end', function() {
            messages.push(msg)
            res.end('{success: true}')
        });
    });
return app;
}
