// chat.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Games
let Chat = new Schema({
    id_chat_app: {
    type: String
  },
  dialog:{
      who:{
          type: String
      },
      message:{
        type: String
        },
    time:{
        type: String
        }
  }
},
{
    collection: 'chats'
});

module.exports = mongoose.model('Chat', Chat);