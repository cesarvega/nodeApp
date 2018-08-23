
const express = require('express'),
      scrumboardRoutes =  express.Router(),
      app = express(),
      _scrumboard = require('../models/scrumboard');

      scrumboardRoutes.route('/').get((req,res)=>{
        _scrumboard.find((err,scrumboards)=>{
            if(err){
                console.log(err);
            }else{
                res.json(scrumboards);
            }
        });
      });

      function makeArray(value) {
        return j.map(function(a) {
          return {[value]: a[value]};
        });
      }
//agregar registros

scrumboardRoutes.route('/add').post((req,res)=>{
    let Scrumboard =  new _scrumboard(req.body)
    Scrumboard.board.list.push({name : "todo re bien",id: "hola esta es el id",idCards:["uyyut1dcards","estusdcards"]})
    Scrumboard.save(function(err,task){
        if (err){
            res.send(err);}
          res.json(task);
          console.log(req.body)

    });

});

//encontrar un solo registro

scrumboardRoutes.route('/edit/:id').get((req,res)=>{
    let id = req.params.id;
    _scrumboard.findById(id,(err,scrumboard)=>{
        res.json(scrumboard)
    })

});
//defined route update

scrumboardRoutes.route('/update/:id').post((req,res)=>{
    //let id = req.params.id;
    _scrumboard.findById(req.params.id, function (err,scrumboard) {
        if (!scrumboard){
          return next(new Error('Could not load Document'));
        }else {
            scrumboard.board.id = req.body.id;
            scrumboard.board.uri = req.body.uri;
        //   appointments.phone = req.body.phone;
        //   appointments.email = req.body.email;
        //   appointments.date = req.body.date;
        //   appointments.time = req.body.time;
         
        scrumboard.save().then(scrumboard => {
            res.json('Update complete');
          })
            .catch(err => {
              res.status(400).send("unable to update the database");
            });
        }
      });
});

// Defined delete | remove | destroy route
scrumboardRoutes.route('/delete/:id').get(function (req, res) {
  //Appointment =  new _scrumboard(req.body);
  _scrumboard.findByIdAndRemove({ _id: req.params.id }, function (err, scrumboard) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
scrumboardRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});
      
module.exports = scrumboardRoutes;

      
