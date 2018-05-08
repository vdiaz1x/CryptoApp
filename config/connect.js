// this is the pg promise setup

// initializing pgp
const pgp = require('pg-promise')({
  // console logs the query for testing purposes
  query: q => console.log('query', q.query),
});

const config = require('./config');

// exports pgp with the config for use in other files
module.exports = pgp(config);
