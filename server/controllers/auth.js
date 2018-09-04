'use strict'

const mongoose = require('mongoose');
const User = require('../models/users');
const service = require('./service');
const bcrypt = require('bcrypt-nodejs');

const express = require('express'),
signUp = express.Router(),
    app = express()

userRoutes.route('/add')
  .post(function (req, res) {
    let user = new User(req.body);  
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10,(err,salt)=>{
        if (err) return next()
        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if (err)  return next(err)
            user.password = hash;         
        })
    })

    // user.save((err)=>{
    //     if(err) res.status(500).send({message: `Error al crear el usuario: ${err}` })
 
 
    //     return res.status(200).send({token: service.createToken(user)})
    // })
    
    user.save(function(err, task) {
      if (err)
        res.send(err);
        
      res.json(task);
      return res.status(200).send({token: service.createToken(user)})
    });
  });

// function signUp(req,res){
//     const user = new users({
//         firstName = req.body.firstName,
//         lastName = req.body.lastName,
//         email = req.body.email,
//         userName = req.body.userName

//     })

//    user.save((err)=>{
//        if(err) res.status(500).send({message: `Error al crear el usuario: ${err}` })


//        return res.status(200).send({token: service.createToken(user)})
//    })

// }

function signIn(req,res){

}

module.exports = {
    signUp,
    signIn
}


