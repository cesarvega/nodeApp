// user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for user
let User = new Schema({
  id_chat_appokgracias: {
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
  mood: {
    type: String
  },
  chatList:{
    id_chat_appokgracias: {
      type: String
    },
    contactId_chat_appokgracias: {
      type: String
    },
    name: {
      type: String
    },
    unread: {
      type: number
    },
    lastMessageTime: {
      type: String
    }    
  }
},
{
    collection: 'users'
});

module.exports = mongoose.model('User', User);