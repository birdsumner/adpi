//-- The Put Controls --//
module.exports = function(req, res, models){
  //Put the ad(s) in the db.
  var model,
      instance;

  if (req.query.type === 'users'){
    model = models.User;
    instance = new model({name: req.query.name, age: req.query.age});
  } else if (req.query.type === 'ads'){
    model = models.Ad;
    instance = new model({title: req.query.title, price: req.query.price});
  }

  instance.save(function(err, result){
    if (err) {
      console.log("The error is", err);
      callback(err);
    }

    jsonResult = JSON.stringify(result);
    res.send("OK", jsonResult);
  });

}
