

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./moduleUsers');
const bcrypt = require('bcrypt-nodejs');

let UserSchema = new Schema(User,{collection: 'users'});

// UserSchema.pre('save',(next)=>{
//     let user = this
//     if(!user.isModified('password')) return next()

//     bcrypt.genSalt(10,(err,salt)=>{
//         if (err) return next()

//         bcrypt.hash(user.password,salt,null,(err,hash)=>{
//             if (err)  return next(err)            

//             user.password = hash;
//             //console.log(hash)
//             next()
//         })
//     })

// })

module.exports = mongoose.model('users',UserSchema)