const mongoose = require('mongoose');

module.exports.connect = (goUserDB) => {
  mongoose.connect(goUserDB);
  // mongoose promise is deprecated so using the node global promise object:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user');
  };