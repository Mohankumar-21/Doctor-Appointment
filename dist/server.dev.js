"use strict";

var express = require('express');

var colors = require('colors');

var morgan = require('morgan');

var dotenv = require('dotenv');

var connectDB = require('./config/db');

var path = require('path'); //dot env


dotenv.config(); //mongo DB

connectDB();
var app = express();
app.use(express.json());
app.use(morgan('dev')); //routes

app.use('/api/v1/user', require("./routes/userRoutes"));
app.use('/api/v1/admin', require('./routes/adminRoutes'));
app.use('/api/v1/doctor', require('./routes/doctorRoutes')); // static files

app.use(express["static"](path.join(__dirname, 'client/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
}); //listen port

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server Running in ".concat(process.env.NODE_MODE, " Mode on port ").concat(process.env.PORT).bgCyan.white);
});