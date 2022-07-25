const express = require("./express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/users-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, function () {
  console.log("express is running on port 3000");
});