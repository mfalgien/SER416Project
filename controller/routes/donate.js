const express = require('express');
const router = express.Router();

/* GET donate page. */
router.get('/', function(req, res, next) {
  res.render('donate');
});

module.exports = router;