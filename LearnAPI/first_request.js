var request=require("request");
request("https://jsonplaceholder.typicode.com/users/1",function(error,response,body){
   if (!error && response.statusCode==200)
   {
      var parseddata=JSON.parse(body);//this parses string into a JSON object
      console.log(parseddata);//it appears to be a javascript object but it is a string
   }
   else
   {
      console.log(error);
   }
});