//-- The Get Controls --//
module.exports = function(req, res, models){
  var model;

  if (req.query.type === 'users'){
    model = models.User;
  } else if (req.query.type === 'ads'){
    model = models.Ad;
  }
  model.find(req.query.id || {}, function(err, results){
    if (err) {
      console.log("The error is", err);
      callback(err);
    }
    jsonResults = JSON.stringify(results);
    res.send("OK", jsonResults);
  });


  //res.send("Now you are getting");
}
