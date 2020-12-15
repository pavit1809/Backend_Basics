var express =require("express");
var app=express();

const {spawn}=require("child_process");

app.get('/', (request,response) =>{
   var datatosend;
   const pyth=spawn('python',['flag.py']);
   pyth.stdout.on('data',function(data){
      console.log("Piping data from python.......");
      datatosend=data.toString();
   });
   pyth.on('close',function(code){
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      response.send(datatosend); 
   });
});

app.listen(process.env.PORT || 3000,process.env.IP,function()
{
	console.log("Server started!!!");
});