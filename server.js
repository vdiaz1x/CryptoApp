// the is the basic configuation for the server
// code borrowed from class work

// grabbing values from .env file
require('dotenv').config();

console.log(process.env.CRYPTO_NEWS_API_KEY);

// basic imports for server
const express     = require('express');
const logger      = require('morgan');
const parser      = require('body-parser');
const path        = require('path');

// configuring database for router
const db = require('./config/connect');

// configuring the routers, inserting the db config
// const users       = require('./user')(db);
// const coins       = require('./coin')(db);
// const comments    = require('./comment')(db);

// grabbing express function
const app = express();

// setting up port
const PORT = process.env.PORT || 3000;

// setting up morgan for dev logging in terminal
app.use(logger('dev'));

// setting up body parser for grabbing information
app.use(parser.json());

// set up path for dist folder (for static React files)
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

// test home route
app.get('/', (req, res) => { res.json('THIS IS TEST'); });

// this starts listening on the server, logging out a confirmation, and errors if any
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
})
  .on('THIS iS ERROR', console.error);

