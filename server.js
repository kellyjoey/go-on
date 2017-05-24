const config = require('./config');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const User = require('./models/user');

// connect to the database and load models
require('./models').connect(config.goUserDB);

const app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb'}))

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')))

// Always return the main index.html, so react-router render the route in the client

//Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

//Passport init
app.use(passport.initialize());
app.use(passport.session());


const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'finalproject', 
  api_key: '386979959351638', 
  api_secret: 'EH2_iF_FqXGA3e_J1RKQFEOQwtc' 
});


app.post("/upload", function(req, res){
  let text= "#SomeText";

  cloudinary.v2.uploader.upload(req.body.image, {transformation: [
  {width: 400, crop: "scale"},
  {overlay: "text:helvetica_15_bold:"+ text +"", gravity: "south_east",x: 12, y: 12, color: "#fff", opacity: 80}
  , {background: "#f26565", color: "#eec9c9", gravity: "south_west", height: 50, overlay: "logowhite_fxvw6l", radius: 16, x: 0, y: 0, crop: "fill"}]}, function(error, result){
    console.log(result);
		res.send("Success!");
  });
});

//Register User
app.post('/register', (req, res) => {
  console.log("you've made it to router.post in server.js");
  let name = req.body.name;
	let email = req.body.email;
	let username = req.body.username;
	let password = req.body.password;
	let password2 = req.body.password2;
  // console.log("this is your request req.body");
	// console.log(req.body);

		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if (err) throw err;
			console.log(user);
		});
res.send("success");
	// 	req.flash('success_msg', 'You are registered and can now login');

	// 	res.redirect('/users/login');
	// }
});


passport.use(new LocalStrategy(
	function(username, password, done){
		User.getUserByUsername(username, function(err, user){
			if (err) throw err;
			if(!user){
				return done(null, false, { message: 'Unknown user' });
			}

			User.comparePassword(password, user.password, function(err, isMatch){
				if (err) throw err;
				if (isMatch){
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.getUserById(id, function(err, user){
			done(err, user);
		});
	});

app.post('/login',
  passport.authenticate('local'),
  function(req, res){
  console.log(res);
  console.log("congratulations");
	res.redirect('/');
});

app.get('/logout', function(req, res){
  console.log("This is req.user logging out" + req.user);

	req.logOut();
  console.log("you are logged out");

	res.send("you're logged out dude");
});

app.get('/piclist', function(req, res){

	cloudinary.api.resources(function(result){
	res.send(result);

},{ type: 'upload' });
});




const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});