//index file for learning ejs
var express =require("express");
var app=express();

app.use(express.static("resources")); //this will tell express to explore the resources directory
app.set("view engine","ejs"); // including this statement will finish our need to include the .ejs extension after every thing

app.get("/",function(request,response){
	response.render("home");
	//this will render the html page .html could have been used but it would return a static page not dynamic
});
app.get("/search/:something",function(request,response){
	var searched_text=request.params.something;
	// response.send("You searched for "+searched_text);
	//to print the searched text on the webpage pass it as an object
	response.render("page1",{texter:searched_text});
});
app.get("/posts",function(request,response){
	var table=[{title: "Hi there I got hot news",author: "Anuraj"},
			   {title: "Hi there I got faltu news",author: "Shatayu"},
			  {title: "Hi there I got cold news",author: "Aman"}];
	response.render("page2",{data:table});
});
app.listen(process.env.PORT || 3000,process.env.IP,function(){ // must add command to start the server.
	console.log("Server is starting!!!");
});