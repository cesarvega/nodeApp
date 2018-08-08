// game.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for appointments

let Appointment = new schema ({
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