
const mongoose = require('mongoose');
 //extend = require('mongoose-schema-extend');
 const Schema = mongoose.Schema;

var user = require('./users')

//user.add({phone:String})

//_admin = Object.create(user,{phone:String})

let Admin = new Schema(user,{
    collection : 'admins'
});

//admin = Admin.add(user,{phone:'String'})

Admin.add({
    phone: String,
    country: String
});
console.log(Admin)
module.exports = mongoose.model('admin',Admin );

































