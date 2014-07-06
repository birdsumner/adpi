var express = require('express')
var app = express();
var routes = require('./lib/routes');
var db = require('./lib/db.js');

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
  db();
  routes(app);
});
