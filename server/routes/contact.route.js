// contact.route.js

const express = require('express'),
  contactRoutes = express.Router(),
  app = express(),
  Contact = require('../models/contact');
// Defined store route
contactRoutes.route('/add')
  .post(function (req, res) {
    let contact = new Contact(req.body);
    console.log(req.body);
    contact.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  });

// Defined get data(index or listing) route
contactRoutes.route('/').get(function (req, res) {
  contact.find(function (err, contacts) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(contacts);
    }
  });
});

// Defined edit route
contactRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Contact.findById(id, function (err, contact) {
    res.json(contact);
  });
});

//  Defined update route
contactRoutes.route('/update/:id').post(function (req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if (!contact)
      return next(new Error('Could not load Document'));
    else {
      contact.name = req.body.name;
      //game.price = req.body.price;

      contact.save().then(contact => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
contactRoutes.route('/delete/:id').get(function (req, res) {
  Contact.findByIdAndRemove({ _id: req.params.id }, function (err, contact) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
contactRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});


module.exports = contactRoutes;