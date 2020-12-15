var express =                 require("express"),
    bodyparser=               require("body-parser"),
    localstrategy=            require("passport-local");
    passportlocalmongoose=    require("passport-local-mongoose"),
    user=     require("./models/user")

var app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
const mongoose=require("mongoose");
const { stringify } = require("querystring");
const passport = require("passport");
const user = require("./models/user");
mongoose.connect('mongodb://localhost/auth_demo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(require("express-session")({
   secret: "Authentication is real shit",
   resave:false,
   saveUninitialized: false   
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// ========================>
// ROUTES!!!!
// ========================>


app.get("/",function(request,response){
   response.render("home");
});
app.get("/secret",function(request,response){
   response.render("secret");
});
// ========================>
// AUTH ROUTES!!!!
// ========================>
//show sign up form
app.get("/register",function(request,response){
   response.render("register");
});
app.post("/register",function(request,response){
   request.body.username
   request.body.password
   user.register(new user({username: request.body.username}),request.body.password,function(err,user){
      if (err){
         console.log(err);
         response.redirect("/register");
      }
      else{
         passport.authenticate("local")(request,response,function(){
            response.redirect("/secret");
         });
      }
   });
});
app.listen(process.env.PORT || 3000,process.env.IP,function()
{
	console.log("Server started!!!");
});