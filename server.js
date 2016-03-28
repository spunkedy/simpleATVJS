var express = require('express'),
    logger = require('morgan');

var app = express();

app.use(express.static('public'));
app.use(logger('dev'));

var server = app.listen(5000);


var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8001 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('received: ' + message);
  });
});
