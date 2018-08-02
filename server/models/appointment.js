// game.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Games
let Appoinment = new Schema({
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

module.exports = mongoose.model('Appoinment', Appoinment);