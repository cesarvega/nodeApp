// game.route.js

const express = require('express'),
  gameRoutes = express.Router(),
  app = express(),
  Game = require('../models/game');
// Defined store route
gameRoutes.route('/add')
  .post(function (req, res) {
    let game = new Game(req.body);
    console.log(req.body);
    game.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  });

// Defined get data(index or listing) route
gameRoutes.route('/').get(function (req, res) {
  Game.find(function (err, games) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(games);
    }
  });
});

// Defined edit route
gameRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Game.findById(id, function (err, game) {
    res.json(game);
  });
});

//  Defined update route
gameRoutes.route('/update/:id').post(function (req, res) {
  Game.findById(req.params.id, function (err, game) {
    if (!game)
      return next(new Error('Could not load Document'));
    else {
      game.name = req.body.name;
      game.price = req.body.price;

      game.save().then(game => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
gameRoutes.route('/delete/:id').get(function (req, res) {
  Game.findByIdAndRemove({ _id: req.params.id }, function (err, game) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
gameRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});


module.exports = gameRoutes;