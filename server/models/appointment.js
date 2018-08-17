// game.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for appointments

let Appointment = new Schema({
  package: {
    vehicleType: String,
    detail: String,
    time: String,
    description: String,
    ServiceMenu:[
      {
        name: String,
        description: String,
        time: String,
        price: String
      }
    ]
  },
 information: {
      customerInfo: {
        firsName: String,
        lastName: String,
        phone: String,
        email: String
      },
      serviceAddres: {
        address: {
          type: String
        },
        apt: {
          type: String
        },
        city: {
          type: String
        },
        state: {
          type: String
        },
        zip: {
          type: String
        },
        Instruction: {
          type: String
        }

      },
      vehicleInfo: {
        year: {
          type: String
        },
        make: {
          type: String
        },
        model: {
          type: String
        },
        color: {
          type: String
        },
        instruction: {
          type: String
        }
      }
  },
  chooseAppointment: {
      date: String,
      time: String
  },
  totalDuration: String,
  totalCost: String,
  paymentDetails: {
    creditCard: {
      cardNumber: String,
      cvv: String,
      expirationDate: String,
      billingZipCode: String
    },
    cash: {
      type: String
    }

  },
  lastUpdate: String,
  create: String
   
  
},
{  
    collection: 'appointments'
  });
  module.exports = mongoose.model('Appointment', Appointment);
