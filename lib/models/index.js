//--- The Compiler for Our Models --//
var users = require('./users.js');
var ads = require('./ads.js');
var async = require('async');

async.series([
  function(callback){
    module.exports.addSchemas = function(mongoose){
      async.series([
        function(innerCallback){
          users(mongoose, innerCallback)
        },
        function(innerCallback){
          ads(mongoose, innerCallback)
        }
      ], callback);
    };
  },
  function(callback){

    module.exports.User = users.User;
    callback();
  },
  function(callback){
    module.exports.Ad = ads.Ad;
    callback();
  }
], function(){});
