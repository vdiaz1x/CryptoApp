// code to run fake dummy data
// borrowed from class work

// importing components to read files and hash passwords
const util = require('util');
const fs = require('fs');
const bcrypt = require('bcrypt');

// imports the database
const db = require('../config/connect');

// imports the user models
const User   = require('../user/userModel')(db);

// grabs the function to read the file
const readFile = util.promisify(fs.readFile);

// reads the file to parse through in JS
readFile('./db/users.csv', 'utf8')
  .then((data) => {
    // trims the data and splits it on a newline
    const lines = data.trim().split('\n');
    // pop off the header row and the empty bottom row
    lines.shift();
    // loop over and insert the users into the db
    return Promise.all(lines.map(async (record) => {
      // destructure the record once we've split the row
      const [firstname, lastname, username, email, password] = record.split(',');

      // hash a password
      const hash  = await bcrypt.hash(password, 11);

      // save parsed data into db
      return User.save({
        firstname,
        lastname,
        username,
        email,
        password_hash: hash,
        trader:        true,
      });
    }));
  })
  .then(data => console.log('DATA', { data }))
  .catch(err => console.error('ERROR', { err }));

