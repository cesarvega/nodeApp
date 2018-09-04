'use strict'

const mongoose = require('mongoose');
const User = require('../models/users');
const service = require('./service');
const bcrypt = require('bcrypt-nodejs');

const express = require('express'),
        app = express()
let userRoutes = express.Router();

function signUp(req,res){
    
    let user = new User(req.body);
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10,(err,salt)=>{
        if (err) return next()
        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if (err) return next(err)
            user.password = hash;         
        })
    })

    user.save((err)=>{
        if(err) res.status(500).send({message: `Error al crear el usuario: ${err}` })
 
 
        return res.status(200).send({token: service(user)})
    })    

}

function signIn(req,res){
    let user = new User(req.body);
    let id = req.params.id;

    User.findById(id,(err,user)=>{
        return res.status(200).send({token: service(user)})

    })
    

}

module.exports = {
    signUp,
    signIn
}


