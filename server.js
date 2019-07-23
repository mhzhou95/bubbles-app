// call required modules
const express = require('express');

const cors = require('cors');
const path = require('path');
// mongoose to connect to mongo DB
const mongoose = require('mongoose');

// pull environment variables from dot env file
require('dotenv').config();

//create express server and port
const app = express();


// cors middleware
app.use(cors());

// parse json
app.use(express.json());

// connect to mongoDB
const uri = process.env.ATLAS_URI;
try {
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

// load in files for routes
const exercisesRouter = require('./routes/bubbles');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

// define routes
app.use('/api/bubbles', exercisesRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const port = process.env.PORT || 5000;
// starts server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
