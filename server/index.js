const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const router = require('./routes');
const connectDB = require('./Database/mongodb');
require('dotenv').config();

const port = process.env.PORT;

const app = express();
// connectDB();

// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// JSON middleware
app.use(express.json());

// All incoming requests run through the routes.js file
app.use(router);

// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB');
// });
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
