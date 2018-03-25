const express = require('express'),
  router = express.Router();
const {
  query
} = require('./pool');


class TreeClass {

  //GET TREE
  static async get(req, res) {

    let queryString = `SELECT *FROM TREE`;

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
    TREE("name", "userId")
    VALUES($1, $2)
    RETURNING "name", "userId";`;

    try {
      let data = await query(queryString, [
        req.body.name,
        req.body.userId
      ]);

      res.send(200, data.rows);
    } catch (err) {
      res.send(500, err);
    }
  }

}

router.get('/', TreeClass.get);
router.post('/', TreeClass.post);
module.exports = router;
