//-- Define the Users --//
module.exports = function(mongoose, innerCallback){
  var self = this;
  self.adSchema = mongoose.Schema({
    title: String,
    price: String
  })

  module.exports.Ad = mongoose.model('Ad', self.adSchema);
  innerCallback();
}
