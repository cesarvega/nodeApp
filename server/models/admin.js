
const mongoose = require('mongoose');
 //extend = require('mongoose-schema-extend');
 const Schema = mongoose.Schema;

var user = require('./moduleUsers')

let Admin = new Schema(user,{
    collection : 'admins'
});

Admin.add({
    phone: String,
    country: String
});

module.exports = mongoose.model('admin',Admin );

































