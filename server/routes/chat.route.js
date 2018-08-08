// chat.route.js

const express = require('express'),
  chatRoutes = express.Router(),
  app = express(),
  Chat = require('../models/chat');
// Defined store route
chatRoutes.route('/add')
  .post(function (req, res) {
    let chat = new Chat(req.body);
    console.log(req.body);
    chat.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  });

// Defined get data(index or listing) route
chatRoutes.route('/').get(function (req, res) {
  Chat.find(function (err, chats) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(chats);
    }
  });
});

// Defined edit routegit status
chatRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Chat.findById(id, function (err, chat) {
    res.json(chat);
  });
});

//  Defined update route
chatRoutes.route('/update/:id').post(function (req, res) {
  Chat.findById(req.params.id, function (err, chat) {
    if (!chat)
      return next(new Error('Could not load Document'));
    else {
      chat.name = req.body.name;
      //game.price = req.body.price;

      chat.save().then(chat => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
chatRoutes.route('/delete/:id').get(function (req, res) {
  Chat.findByIdAndRemove({ _id: req.params.id }, function (err, chat) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
chatRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});


module.exports = chatRoutes;