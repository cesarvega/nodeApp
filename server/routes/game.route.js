// game.route.js

const express = require('express'),
gameRoutes = express.Router(),
app = express();
const cors = require('cors');
// Require Game model in our routes module
let Game = require('../models/game');
console.log("game-routs active")
// Defined store route
gameRoutes.route('/add').post(function (req, res) {
  let game = new Game(req.body);
   game.save()
    .then(game => {
    res.status(200).json({'game': 'CoGamein added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});



// Defined get data(index or listing) route
gameRoutes.route('/').get(function (req, res) {


    const mongoose = require('mongoose');
    Schema = mongoose.Schema;
    
      var userSchema = new Schema({
          name  :  { type: String, default: '' }
        , password   :  { type: String, default: '' }
      });
      var userModel = mongoose.model('User', userSchema);
      var test = new userModel({name: "test", password: "test"})
    
      console.log("me: " + test)
    
      test.save(function (err, test) {
        console.log("saved?")
        if (err) {
          console.log("error");
          return console.error(err);
        }
        console.log("saved!")
      });



   Game.find(function (err, games){
    if(err){
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
  Game.findById(id, function (err, game){
      res.json(game);
  });
});

//  Defined update route
gameRoutes.route('/update/:id').post(function (req, res) {
   Game.findById(req.params.id, function(err, game) {
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
   Game.findByIdAndRemove({_id: req.params.id}, function(err, game){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = gameRoutes;