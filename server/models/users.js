
// Define collection and schema for user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
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
  mood: {
    type: String
  },
  chatList:{
    id_chat_app: {
      type: String
    },
    contactId_chat_app: {
      type: String
    },
    name: {
      type: String
    },
    unread: {
      type: Number
    },
    lastMessageTime: {
      type: String
    }    
  }
},{
  collection: 'users'
}) 

  module.exports = mongoose.model('User', User);