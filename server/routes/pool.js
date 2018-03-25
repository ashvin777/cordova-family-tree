const {
  Pool
} = require('pg');

const pool = new Pool({
  user: 'postgres',
  database: 'FT',
  password: 'postgres',
  host: 'localhost',
  port: 5432
});

let query = (queryString, params = []) => {

  return new Promise(async (resolve, reject) => {
    const client = await pool.connect();
    try {
      resolve(await client.query(queryString, params));
    } catch (err) {
      console.log(err);
      reject(err);
    } finally {
      await client.release()
    }
  });
}

module.exports = {
  query: query
};
