//Important points:
// first step is connecting to a db
// second step is to create a schema for the Data
// to get all data from db{
   // everything will be returned in data
   // db_name.find({},function(err,data){
   //    if (err){
   //       console.log("error occured!!!!");
   //    }
   //    else{
   //       //remder the page and the data as per convience
   //    }
   // }
// }

//syntax to connect to a database
var express=require("express");
var app=express();
const mongoose=require("mongoose");
const { stringify } = require("querystring");
mongoose.connect('mongodb://localhost/demo_db_cats', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
//syntax to connect to database ends here
//Revision stuff
var catschema=new mongoose.Schema({
   name: String,age: Number,temperament: String
});

var Cat=mongoose.model("Cat",catschema);
//now we can do Cat.create,.delete(),.find()::: it actually has all of the methods that we use

// var george=new Cat({
//    name: "Morris",age: 14,temperament:"Evil"
// });

// //a callback function is necessary is to know what went wrong or is everything fine
// //cat is referring from what is sent back from the db

// george.save(function(err,cat){
//    if (err){
//       console.log("Something went wrong");
//    }
//    else{
//       console.log("We just saved a cat");
//       console.log(cat);
//    }
// })

//The above step is commented as every time we start the server the same cat is added to the db
//we will now see the find function

//instead of first creating and then saving a cat we can save simply use the create method

Cat.create({
   name:"Hella",age: 2,temperament: "happy"
},function(err,cat){
   if (err){
      console.log(err);
   }else{
      console.log(cat);
   }
}
);

Cat.find({},function(err,cats){
   if (err){
      console.log("Oh NO!!");
   }
   else{
      console.log(cats);
   }
})



// -------This is the old stuff------
//adding a cat to the database

// var catschema=new mongoose.Schema({
//    //just a structure of data in db but we can easily alter it
//    name: String,
//    age: Number,
//    temperament: String
// });
// //creates db.cats basically the structure is compiled
// // into a model now Cat has all the methods basically we can do Cat.create(),Cat.remove()
// var Cat=mongoose.model("Cat",catschema);
// // adding a cat to the database
// // we are trying to save george the cat to the database
// //here george is just a variable name nothing to do with the data inside
// // bascially save takes time and a callback function is a must 
// // var george=new Cat({ 
// //    name:"Mr bad",
// //    age: 9,
// //    temperament: "Angry"
// // });
// // george.save(function(err,cat){
// //    if (err){
// //       console.log("Something went wrong!!");
// //    }
// //    else{
// //       console.log("We just saved a cat to the db");
// //       console.log(cat);
// //    }
// // });

// // app.listen("3000",function(){
// //    console.log("Server has started!!");
// // });

// //Another method to create a cat//create and save all at once
// Cat.create({
//    name: "Snow white",
//    age : 15,
//    temperament: "Nicer" 
// },function(err,cat){
//    if (err){
//       console.log(err);
//    }
//    else{ 
//       console.log(cat);
//    }
// });


// retrieve all cats from the DB and console.log each one
// command to retrieve all cats from database
//{} object because we are not looking for any object so it will display everything
// Cat.find({},function(err,cats){
//    if (err){
//       console.log("OH NO ERROR!!");
//       console.log(err);
//    }
//    else{
//       console.log("All the cats .......");
//       console.log(cats);
//    }
// });