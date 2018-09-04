// user.route.js
const mongoose = require('mongoose');
const express = require('express'),
  userRoutes = express.Router(),
  app = express();
  User = require('../models/users');
  const service = require('../controllers/service');
  const bcrypt = require('bcrypt-nodejs');
//Defined store route
userRoutes.route('/add')
  .post(function (req, res) {
    let user = new User(req.body);  
    //encriptamos la contrasena
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10,(err,salt)=>{
        if (err) return next()
        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if (err)  return next(err)
            user.password = hash;         
        })
    })
 //guardamos el usuario y generamos el token
    user.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
      
      //return res.status(200).send({token:service(user)})
    });
  });

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user) {
    //res.json(user);
    return res.status(200).send({token: service(user)})
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.name = req.body.name;
      //user.price = req.body.price;

      user.save().then(user => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function (err, user) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
userRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});


module.exports = userRoutes;