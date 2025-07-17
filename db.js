import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'portfolio',
  password: '1234',
  port: 5432,
  // ssl: {
  //   rejectUnauthorized: false, // Needed for Render
  // }
});

export default pool;
