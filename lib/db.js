//-- All the DB Stuff --//
var mongoose = require('mongoose');
var models = require('./models/');

module.exports = function(){
  mongoose.connect('mongodb://localhost/adpi_ads');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
    models.addSchemas(mongoose);
  });
}
