var express = require('express'),
    logger = require('morgan');

var app = express();

app.use(express.static('public'));
app.use(logger('dev'));

var server = app.listen(5000);
