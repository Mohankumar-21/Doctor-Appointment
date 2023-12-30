 const express = require('express');
 const colors = require('colors');
 const morgan = require('morgan');
 const dotenv = require('dotenv');
const connectDB = require('./config/db');

 //dot env
 dotenv.config();

 //mongo DB
 connectDB();
 const app = express();

 app.use(express.json());
 app.use(morgan('dev'));

//routes
app.use('/api/v1/user', require("./routes/userRoutes"));
app.use('/api/v1/admin', require('./routes/adminRoutes'));
app.use('/api/v1/doctor', require('./routes/doctorRoutes'));

//listen port

const port = process.env.PORT || 8080
app.listen(port, ()=>
{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
})
