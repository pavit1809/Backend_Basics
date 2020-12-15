//good work
var express =require("express");
var app=express();
app.get("/",function(request,response){
	response.send("Hi there!! Welcome to my assignment!");
});
app.get("/speak/:text",function(request,response){
//a good improvement can be to create a dictionary rather than many iffs;
	var str=request.params.text;
	if (str=="pig"){
		response.send("Oink!!");
	}
	if (str=="cow"){
		response.send("Moo!!");
	}
	if (str=="dog"){
		response.send("Woof Woof!!");
	}
});
app.get("/repeat/:text/:num",function(request,response){
	var str=request.params.text;
	var times=Number(request.params.num);
	var str1="";
	for(var i=0;i<times;i++){
		str1+=str;
		str1+=" ";
	}
	response.send(str1);
});
app.get("*",function(request,response){
	response.send("Wrong input!!");
})
var port = process.env.PORT || 3000;
app.listen(port, function () { // must add command to start the server.
  console.log("Server Has Started!");
});
