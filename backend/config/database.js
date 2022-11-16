const mongoose = require("mongoose");

//this function returns a mongoose connection
const databaseConnection = (url) => {
  return mongoose.connect(url);
};

module.exports = databaseConnection;
