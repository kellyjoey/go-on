const config = require('./config');
const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('./models/user');

// connect to the database and load models
require('./models').connect(config.goUserDB);

const app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))
app.use(bodyParser.json({limit: '50mb'}))


const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'finalproject', 
  api_key: '386979959351638', 
  api_secret: 'EH2_iF_FqXGA3e_J1RKQFEOQwtc' 
});

// Setup logger


app.post("/upload", function(req, res){
  let text= "#SomeText";

  cloudinary.v2.uploader.upload(req.body.image, {transformation: [
  {width: 400, crop: "scale"},
  {overlay: "text:helvetica_15_bold:"+ text +"", gravity: "south_east",x: 12, y: 12, color: "#fff", opacity: 80}
  , {background: "#f26565", color: "#eec9c9", gravity: "south_west", height: 50, overlay: "logowhite_fxvw6l", radius: 16, x: 0, y: 0, crop: "fill"}]}, function(error, result){
    console.log(result);
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

	// 	req.flash('success_msg', 'You are registered and can now login');

	// 	res.redirect('/users/login');
	// }
});

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')))

// Always return the main index.html, so react-router render the route in the client


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});