// game.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for appointments

let Appointment = new Schema ({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  }  
},{
    collection: 'appointments'
  });
  module.exports = mongoose.model('Appointment', Appointment);

/*let Appoinment = new Schema({
  zipcode: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  address: {
    type: String
  },
  address2: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  postalCode: {
    type: String
  }
}, {
    collection: 'appointments'
  });

module.exports = mongoose.model('Appoinment', Appoinment);*/

