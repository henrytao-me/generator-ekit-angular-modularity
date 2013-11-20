'use strict';

// Module dependencies.
var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();
var server = http.createServer(app);

// Express Configuration
app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

// call backend
require('./api/app.js')(app, server);

// Development Configuration
app.configure('development', function() {
    // app.use(express.static(path.join(__dirname, '.tmp')));
    // app.use(express.static(path.join(__dirname, 'app')));
    app.use(express.errorHandler());
});

// Production Configuration
app.configure('production', function() {
    // app.use(express.static(path.join(__dirname, 'dist')));
});

module.exports = app;
// if you want to use socket.io, checkout this link https://npmjs.org/package/grunt-express

