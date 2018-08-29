// admin.route.js
const express = require('express'),
  adminRoutes = express.Router(),
  app = express(),
  _admin = require('../models/admin');
  
adminRoutes.route('/set')
  .post(function (req, res) {
    var admin =  new _admin(req.body);
   
    admin.save(function(err, task) {
      if (err){
        res.send(err);}
      res.json(task);
      console.log(req.body)
    });
  });

// Defined get data(index or xlisting) route
adminRoutes.route('/').get(function (req,res) {
  //var admin =  new _admin(req.body);
  _admin.find(function (err, admins) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(admins);
    }
  });
});

function makeArray(value) {
  return j.map(function(a) {
    return {[value]: a[value]};
  });
}
// Defined edit route
adminRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  admin =  new _admin(req.body);
  _admin.findById(id, function (err, admins) {
    res.json(admins);
  });
});

//  Defined update route
adminRoutes.route('/update/:id').post(function (req, res) {
  //admin =  new _admin(req.body);
  _admin.findById(req.params.id, function (err, admins) {
    if (!admins)
      return next(new Error('Could not load Document'));
    else {
      admins.firstName = req.body.firstName;
      
      admins.lastName = req.body.lastName;
     
      admins.phone = req.body.phone;
      
      admins.email = req.body.email;         
     
      admins.save().then(admins => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
adminRoutes.route('/delete/:id').get(function (req, res) {
  //admin =  new _admin(req.body);
  _admin.findByIdAndRemove({ _id: req.params.id }, function (err, admins) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
adminRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

module.exports = adminRoutes;