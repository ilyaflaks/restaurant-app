const mongoose = require("mongoose");
require("dotenv").config();
console.log("inside connection, uri: " + process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
