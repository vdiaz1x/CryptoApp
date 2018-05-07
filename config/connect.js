// this is the pg promise setup

//initializing pgp
const pgp = require('pg-promise')({
  // not sure what this line does, will have to research/remove if necessary
  query: q => console.log(q.query),
});

const config = require('./config');

// exports pgp with the config for use in other files
module.exports = pgp(config);
