// console.log("welcome to our first express app demo");
// to install express : npm install express
//this is a demo file for express learning
var express=require("express");
var app=express();
// defining routes
// "/" -> hi there
app.get("/",function(request,response){
	response.send("Hi there!");
});
// "/bye" -> goodbye
app.get("/bye",function(request,response){
	response.send("Good Bye");
});
// "/dog" -> Meow
app.get("/dog",function(request,response){
	console.log("Koi toh hai yaha");
	response.send("Meow");
});
//more about routes
//route params is a attribute of request which gives information about the query as an object
//continued: {anything: 'nccwcwecwecw' } this type of thing is printed on the console
app.get("/r/:anything",function(request,response){// ":" thing matches pattern for /r/anysinglethingbeforenextslash
	//this pattern test can be further extended.
	console.log(request.params);
	response.send("Welcome to a black hole");
});
//the * thing is for all the other routes which are not defined 
app.get("*",function(request,response){//order of routes matter basically this matches with all other routes so if we places it on top then all request match with it and then this message is displayed.
	response.send("You did something evil!!!");
});
//tell express to listen to our requests;
app.listen(process.env.PORT || 3000,process.env.IP,function(){ // must add command to start the server.
	console.log("Server is starting!!!");
});