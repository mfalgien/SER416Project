const express = require('express');
const router = express.Router();

/* GET payments page. */
router.get('/', function(req, res, next) {
  res.render('payments');
});

module.exports = router;