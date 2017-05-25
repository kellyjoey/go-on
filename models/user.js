const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String
  },
  password: {
      type: String
  },
  name: {
      type: String
  },
  username: {
    type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash){
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function(username, callback) {
  var query = { username: username };
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if (err) throw err;
    callback(null, isMatch);
  });
}

module.exports.checkEmailExist = function(email, callback) {
  var query = { email: email };
  User.findOne(query, function(err, isMatch){
    if (isMatch){
      return("Email already registered");
    }
  });
}