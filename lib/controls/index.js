//--- The compiler for our controllers --//
var put = require('./put.js');
var get = require('./get.js');
//
var models = require('../models');

exports.put = function(req, res){
  put(req, res, models);
}

exports.get = function(req, res){
  get(req, res, models);
}
