const express = require('express'),
  router = express.Router();

const user = require('./routes/user'),
  tree = require('./routes/tree'),
  member = require('./routes/member');

router.use('/user', user);
router.use('/tree', tree);
router.use('/member', member);

module.exports = router;
