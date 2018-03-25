const express = require('express'),
  router = express.Router();
const { query } = require('./pool');


class UserClass {

  //CREATE USER
  static async post(req, res) {
    let queryString = `INSERT INTO
    users(name, gender, mobile, email)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, gender, mobile, email;`;

    try {
      let data = await query(queryString, [
        req.body.name,
        req.body.gender,
        req.body.mobile,
        req.body.email
      ]);

      res.send(200, data.rows);
    } catch (err) {
      res.send(500, err);
    }
  }

}

router.post('/',UserClass.post);
module.exports = router;
