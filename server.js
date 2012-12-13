#!/usr/bin/env node

var server = require('router').create();
var file = require('./lib/file').file;
var port = process.argv[2] || 9000;
var live = process.argv[3] || true;
var url = require('url');   
var last = Date.now();
var triggered = false;
var time;
var wait = 1500;
var mime = require('mime');

server.get('/*', file('./{*}'));

server.listen(port);

console.log('server running on port',port);

process.on('uncaughtException', function(err) { console.log(err.stack) });