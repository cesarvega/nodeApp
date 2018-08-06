const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
Schema = mongoose.Schema;

  // var userSchema = new Schema({
  //     name  :  { type: String, default: '' }
  //   , password   :  { type: String, default: '' }
  // });
  // var userModel = mongoose.model('User', userSchema);
  // var test = new userModel({name: "test", password: "test"})

  // console.log("me: " + test)

  // test.save(function (err, test) {
  //   console.log("saved?")
  //   if (err) {
  //     console.log("error");
  //     return console.error(err);
  //   }
  //   console.log("saved!")
  // });
  // console.log("after save")

module.exports = router;