//-- Define the Users --//
module.exports = function(mongoose, innerCallback){
  var self = this;
  self.userSchema = mongoose.Schema({
    name: String,
    age: String
  })

  module.exports.User = mongoose.model('User', self.userSchema);
  innerCallback();
}
