const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // If using SSL, uncomment the line below
  // ssl: { rejectUnauthorized: false },
});

module.exports = pool;
