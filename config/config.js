// this is the config to get pg promise to connect express to the db

// export db config
module.exports = process.env.DATABASE_URL || {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'crypto_db',
  /* user:     process.env.DB_USER, */
};
