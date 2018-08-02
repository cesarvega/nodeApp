// contac.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Games
let Contact = new Schema({
    id_chat_app: {
    type: String
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    status: {
        type: String
    },
    mood:{
        type: String      
    }
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('Contact',Contact);