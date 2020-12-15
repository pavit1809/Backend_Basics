var express=require("express");
var app=express();
const mongoose=require("mongoose");
const { stringify } = require("querystring");
mongoose.connect('mongodb://localhost/demo_db_extra', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
mongoose.set('useFindAndModify', false);
var userschema=new mongoose.Schema({
   secret_key: Number,
   details :[{entity: String,password: String}]
});
var User=mongoose.model("User",userschema);
var newuser={
   secret_key: 1234,
   details: [{entity:"Facebook",password:"PASSWORD"}]
};
// CREATING A NEW USER
// User.create(newuser,function(err,user){
//    if (err){
//       console.log("err");
//    }
//    else{
//       console.log(user);
//    }
// });
//ADDING A Entity
// var newpass={entity:"Twitter",password:"Helloworld"};
// User.findOneAndUpdate({secret_key:1234},{$push:{details:newpass}},function(err,user){
//    if (err){
//       console.log(err);
//    }
//    else{
//       console.log(user);
//    }
// });
//Deleting a entity
// User.updateMany({},{$pull :{details:{entity:"Twitter"}}},function(err,user){
//    if (err){
//       console.log(err);
//    }
//    else{
//       console.log(user);   
//    }
// });
//Finding all entities
// User.find({secret_key:1234},function(err,data){
//    if (err){
//       console.log(err);
//    }
//    else{
//       if (data.length>0){
//          console.log(data[0].details);
//       }
//       else{
//          console.log("No records found")
//       }
//    }
// });
//Updating a entity
// User.findOneAndUpdate({secret_key:1234,"details.entity":"Twitter"},{$set :{"details.$[].password":"CSE4003"}},function(err,user){
//    if (err){
//       console.log(err);
//    }
//    else{
//       console.log("Successfully updated");
//       // console.log(user);
//    }
// });