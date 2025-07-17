// import pg from 'pg';
// const { Pool } = pg;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'portfolio',
//   password: '1234',
//   port: 5432,
//   // ssl: {
//   //   rejectUnauthorized: false, // Needed for Render
//   // }
// });

// export default pool;

// db.js
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  ssl: {
    rejectUnauthorized: false, // Required by Render
  },
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1); // or try to reconnect logic
});

export default pool;
