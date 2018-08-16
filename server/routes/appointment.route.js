// appointments.route.js
const express = require('express'),
  appointmentRoutes = express.Router(),
  app = express(),
  Appointment = require('../models/appointment');
  _appointment = require('../models/appointment');
// Defined store route
appointmentRoutes.route('/set')
  .post(function (req, res) {

      //   this._appointment.package.detail = '11/26/2018';
  //  this._appointment.package.time = ''11/26/2018'';
  //   this._appointment.package.description = ''11/26/2018'';
  //   this._appointment.package.ServiceMenu.push({ name: 'String',
  //     description: 'String',
  //     time: 'String',
  //     price: 'String'});
  //   this._appointment.information.customerInfo.firsName = 'cesar';
  //   this._appointment.information.customerInfo.lastName = 'cesar';
  //   this._appointment.information.customerInfo.phone = 'cesar';
  //   this._appointment.information.customerInfo.email = 'cesar';
  //   this._appointment.information.serviceAddres.address = 'cesar';
  //   this._appointment.information.serviceAddres.apt = 'cesar';
  //   this._appointment.information.serviceAddres.city = 'cesar';
  //   this._appointment.information.serviceAddres.Instruction = 'cesar';
  //   this._appointment.information.serviceAddres.state = 'cesar';
  //   this._appointment.information.serviceAddres.zip = 'cesar';
  //   this._appointment.information.vehicleInfo.year= '2010';
  //   this._appointment.information.vehicleInfo.make= 'cesar';
  //   this._appointment.information.vehicleInfo.model= 'cesar';
  //   this._appointment.information.vehicleInfo.color= 'cesar';
  //   this._appointment.information.vehicleInfo.instruction= 'cesar';
  //   this._appointment.chooseAppointment.date= 'cesar';
  //   this._appointment.chooseAppointment.time= 'cesar';
  //   this._appointment.totalDuration= 'cesar';
  //   this._appointment.totalCost= 'cesar';
  //   this._appointment.paymentDetails.creditCard.cardNumber= 'cesar';
  //   this._appointment.paymentDetails.creditCard.cvv= 'cesar';
  //   this._appointment.paymentDetails.creditCard.expirationDate= 'cesar';
  //    this._appointment.paymentDetails.creditCard.billingZipCode= 'cesar';
  this._appointment =   {
    package: {
      vehicleType: 'Honda Civic',
      detail: 'works job',
      time: '30 min',
      description: 'full lavado',
      ServiceMenu: [
        {
          name: 'Leather Treatment',
          description: 'Leather Treatment',
          time: '10 min',
          price: '$39'
        }
      ]
    },
    information: {
      customerInfo: {
        firsName: 'Cesar',
        lastName: 'Vega',
        phone: '12345',
        email: 'dfsghdsgh@gamail'
      },
      serviceAddres: {
        address: 'cra32rr3r3',
        apt: '200',
        city: 'wwty',
        state: 'eyyrey',
        zip: '40001',
        Instruction: 'lavar piel'
      },
      vehicleInfo: {
        year: '2010',
        make: '2010',
        model: '2010',
        color: 'red',
        instruction: 'lavar con cuidado'
      }
    },
    chooseAppointment: {
      date: '01/01/2010',
      time: '00:10'
    },
    totalDuration: '0:10',
    totalCost: '99',
    paymentDetails: {
      creditCard: {
        cardNumber: '00000001',
        cvv: 'hh',
        expirationDate: 'xx',
        billingZipCode: 'x'
      },
      cash: '00000'
    },
    lastUpdate: '00000',
    create: '00000'
  };
  
  
    // var service = { name: req.body.name, description: 'wash',time:'11:00',price:'90' }; 
    
    // appointments.package.ServiceMenu.push(service)
     
    this._appointment.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
      console.log(req.body)
    });
  });

// Defined get data(index or xlisting) route
appointmentRoutes.route('/').get(function (req, res) {
  Appointment.find(function (err, appointments) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(appointments);
    }
  });
});

function makeArray(value) {
  return j.map(function(a) {
    return {[value]: a[value]};
  });
}
// Defined edit route
appointmentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Appointment.findById(id, function (err, appointments) {
    res.json(appointments);
  });
});

//  Defined update route
appointmentRoutes.route('/update/:id').post(function (req, res) {
  Appointment.findById(req.params.id, function (err, appointments) {
    if (!appointments)
      return next(new Error('Could not load Document'));
    else {
      appointments.firstName = req.body.firstName;
      appointments.lastName = req.body.lastName;
      appointments.phone = req.body.phone;
      appointments.email = req.body.email;
      appointments.date = req.body.date;
      appointments.time = req.body.time;
     
      appointments.save().then(appointments => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
appointmentRoutes.route('/delete/:id').get(function (req, res) {
  Appointment.findByIdAndRemove({ _id: req.params.id }, function (err, appointments) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});
// Defined delete | remove | destroy route
appointmentRoutes.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});


module.exports = appointmentRoutes;