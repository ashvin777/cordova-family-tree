const express = require('express'),
router = express.Router();
const {
query
} = require('./pool');


class MemberClass {

//GET TREE
static async get(req, res) {

  let queryString = `SELECT *FROM MEMBER`;

  if (req.query && Object.keys(req.query).length > 0) {
    queryString += ' WHERE';

    Object.keys(req.query).forEach(key => {
      queryString += ` "${key}"=${req.query[key]}`;
    });
  }

  try {
    let data = await query(queryString);
    res.send(200, data.rows);
  } catch (err) {
    res.send(500, err);
  }
}

//CREATE
static async post(req, res) {
  let queryString = `INSERT INTO
  MEMBER("name", "mobile", "email", "gender", "fatherId", "motherId", "spouseId")
  VALUES($1, $2, $3, $4, $5, $6, $7)
  RETURNING "id", "name", "mobile", "email", "gender", "fatherId", "motherId", "spouseId";`;

  try {
    let data = await query(queryString, [
      req.body.name,
      req.body.mobile,
      req.body.email,
      req.body.gender,
      req.body.fatherId,
      req.body.motherId,
      req.body.spouseId
    ]);

    res.send(200, data.rows);
  } catch (err) {
    res.send(500, err);
  }
}

}

router.get('/', MemberClass.get);
router.post('/', MemberClass.post);
module.exports = router;
