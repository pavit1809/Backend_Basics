var express =require("express");
var app=express();
var bodyparser=require("body-parser"); // we need to use it whenever we need to extract data from the server side from the form

var friends=["Tony","Miranda","Justin","Lily","Ferry"];
//solution is make it global: not a good option as at every server restart the added data will go and only base data 		//will remain
app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(request,response){
	response.render("home");
});

app.get("/friends",function(request,response){
	// value of name of ejs file will be in the body of the request
	
	response.render("friends",{list:friends});
});
//we need a post route whenever we are adding data
app.post("/addfriend",function(request,response){
	var nf=request.body.newfriend; // to access this we need to install a package called body parser
	//new friend is because of the name attribute that is set on the input
	// we cannot simply do friends.push(nf) because of scoping issues the paramter isn't global
	//solution is make it global: not a good option as at every server restart the added data will go and only base data 		//will remain !! this also will be solved once we work on databases
	//after making it global;
	friends.push(nf);
	// response.send("You have reached a post route");
	response.redirect("/friends");// this will redirect us to the same page after feeding form and adding data
});

app.listen(process.env.PORT || 3000,process.env.IP,function(){ // must add command to start the server.
	console.log("Server is starting!!!");
});