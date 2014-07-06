//--- The Compiler for Routes --//
var controls = require('../controls');

module.exports = function(app) {
  app.get('/put', function(req, res){
    controls.put(req, res);
  });

  app.get('/get', function(req, res){
    controls.get(req, res);
  })
}
