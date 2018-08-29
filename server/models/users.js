'use strict'

// user.js


  const user = {
      firstName:String,
      lastName: String,
      email: String,
      userName: {
        type: String
        
      },  
      password: {
        type: String, select: false
       },
      create: {
        type: Date, 
        default: Date.now()
      }
    }
module.exports = user


//----------------------

// Define collection and schema for user
// let User = new Schema({
//   firstName:String,
//   lastName: String,
//   email: String,
//   userName: {
//     type: String,
//     unique: true
//   },  
//   password: {
//     type: String, select: false
//   },
//   create: {
//     type: Date, 
//     default: Date.now()

//   }

// },
// {
//     collection: 'users'
// });

// User.pre('save',(next)=>{
//   let user = this
//   if(!user.isModified('pasword')) return next()

//   bcrypt.genSalt(10,(err,salt)=>{
//     if(err) return next(err)

//     bcrypt.hash(user.password,salt,null,(err,hash)=>{
//       if(err) return next(err)

//       user.password = hash
      
//       next()           

//     })
//   })

// })
// module.exports = mongoose.model('User', User);

//var User = mongoose.model('User',UserSchema)


  // id_chat_app: {
  //   type: String
  // },
  // name: {
  //   type: String
  // },
  // avatar: {
  //   type: String
  // },
  // status: {
  //   type: String
  // },
  // mood: {
  //   type: String
  // },
  // chatList:{
  //   id_chat_app: {
  //     type: String
  //   },
  //   contactId_chat_app: {
  //     type: String
  //   },
  //   name: {
  //     type: String
  //   },
  //   unread: {
  //     type: Number
  //   },
  //   lastMessageTime: {
  //     type: String
  //   }    
  // }