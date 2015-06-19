'use strict';

module.exports = function(req, res) {

    

    var messages = [];

    if (req.url === '/') {
        res.end('wut');
        return;
    }
    if(req.url === '/api/message' && req.method === 'GET') {
        res.end(JSON.stringify(messages)) //if there were messages...
        return;
    }
    if(req.url === '/api/message' && req.method === 'POST') {
        var msg = '';
        req.on('data', function() {
            msg += chunk.toString('utf-8')
        })
        req.on('end', function() {
            messages.push(msg)
            res.end('{success: true}')
        })
        return;
    }
    res.end('Hello');
}
