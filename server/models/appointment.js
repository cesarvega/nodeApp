// game.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for appointments

let Appointment = new Schema({
  package: {
    vehicleType: {
      
        type: String
      
    },
    detail: {
      type: String
    },
    time: {
      type: String
    },
    description: {
      type: String
    },
    ServiceMenu:[
      {
        name: String,
        description: String,
        time: String,
        price: Decimal128
      }
    ]
  },
 information: {
      customerInfo: {
        firsName: {
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
        }
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
      date: {
        type: String
      },
      time: {
        type: String
      }
  },
  totalDuration: {
    type: String
  },
  totalCost: {
    type: String
  },
  paymentDetails: {
    creditCard: {
      cardNumber: {
        type: String
      },
      cvv: {
        type: String
      },
      expirationDate: {
        type: String
      },
      billingZipCode: {
        type: String
      }
    },
    cash: {
      type: Boolean
    }

  },
  lastUpdate: {
    type: String
  }   
  
},
{  
    collection: 'appointments'
  });
  module.exports = mongoose.model('Appointment', Appointment);
