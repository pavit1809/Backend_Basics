//it is kind of a movie search app and also a template for apps that use api
var express=require("express");
var app=express();
var bodyparser=require("body-parser");
//for api call 
var request=require("request");
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("landing");
})

app.get("/results",function(req,res){  
   var tbs=req.query.asked;
   // https://nominatim.openstreetmap.org/search?q=17+Strada+Pictor+Alexandru+Romano%2C+Bukarest&format=geojson
   var url="=http://www.omdbapi.com/?s"+tbs+"&apikey=thewdb";
   request(url,function(error,response,body){
      if (!error && response.statusCode==200)
      {
         var results=JSON.parse(body);
         res.render("results",{data:results});
      }
      else
      {
         res.send("Search Properly");
      }
   });
});

app.listen(process.env.PORT || 3000,process.env.IP,function(){ // must add command to start the server.
	console.log("Server is starting!!!");
});