// info.route.js
const express = require('express'),
  infoRoutes = express.Router(),
  app = express(),
  _info = require('../models/info');
  const service = require('../controllers/service');
  
infoRoutes.route('/set')
  .post(function (req, res) {
    var Info =  new _info(req.body);
   
    Info.save(function(err, task) {
      if (err){
        res.send(err);}
      res.json(task);
      console.log(req.body)
    });
  });

// Defined get data(index or xlisting) route
infoRoutes.route('/').get(function (req,res) {
  //var Info =  new _info(req.body);
  _info.find(function (err, Infos) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(Infos);
    }
  });
});

function makeArray(value) {
  return j.map(function(a) {
    return {[value]: a[value]};
  });
}
// Defined edit route
infoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Info =  new _info(req.body);
  _info.findById(id, function (err, Infos) {
    //res.json(Infos);

    //si esta el regisro se genera un token
    return res.status(200).send({token: service(Infos)})
  });
});

//  Defined update route
infoRoutes.route('/update/:id').post(function (req, res) {
  //Info =  new _info(req.body);
  _info.findById(req.params.id, function (err, Infos) {
    if (!Infos)
      return next(new Error('Could not load Document'));
    else {
      Infos.firstName = req.body.firstName;
      Infos.middleName = req.body.middleName;
      Infos.lastName = req.body.lastName;
      Infos.gender = req.body.gender;
      Infos.phone = req.body.phone;
      Infos.dateBirth = req.body.dateBirth;
      Infos.email = req.body.email;
      Infos.countryRes = req.body.countryRes;
      Infos.mailStreetAdd1 = req.body.mailStreetAdd1;
      Infos.mailStreetAdd2 = req.body.mailStreetAdd2;
      Infos.state = req.body.state;
      Infos.zip = req.body.zip;
      Infos.cell = req.body.cell;
      Infos.profession = req.body.profession;
      Infos.confirm = req.body.confirm;
     
     
      Infos.save().then(Infos => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
infoRoutes.route('/delete/:id').get(function (req, res) {
  //Info =  new _info(req.body);
  _info.findByIdAndRemove({ _id: req.params.id }, function (err, Infos) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
infoRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

module.exports = infoRoutes;