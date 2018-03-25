const {
  Pool
} = require('pg');

const pool = new Pool({
  user: 'lplzlyagflntsq',
  database: 'd470vbetfgpg2s',
  password: '1da340036af028ba71f7097482b45269e690484177981f8d427927f5db5126e5',
  host: 'ec2-79-125-117-53.eu-west-1.compute.amazonaws.com',
  port: 5432,
    ssl: true
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
