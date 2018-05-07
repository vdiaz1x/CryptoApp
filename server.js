//the is the basic configuation for the server
//code borrowed from class work

// grabbing values from .env file
require('dotenv').config();

//basic imports for server
const express = require('express');
const logger = require('morgan');
const parser = require('body-parser');
const path = require('path');

//configuring database for router
const dbConx = require('./config/connect');
// const taskRouter = require('./task')(dbConx);

//grabbing express function
const app = express();

//setting up port
const PORT = process.env.PORT || 3000;

//setting up morgan for dev logging in terminal
app.use(logger('dev'));

//setting up body parser for grabbing information
app.use(parser.json());

// set up path for dist foldeaer (for static React files)
app.use(express.static(path.join(__dirname, 'dist')));

// app.use('/api/users/:userID/tasks', (req, res, next) => {
//   // let's pretend we've logged in
//   req.session = {
//     user: {
//       userID: req.params.userID,
//     },
//   };
//   next();
// }, taskRouter);

// app.get('/api/users/:userID', (req, res) => {
//   res.send('USERS');
// });

app.get('/', (req,res)=>{res.json('THIS IS TEST')})

// START SERVER
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
}).on('error', console.error);

