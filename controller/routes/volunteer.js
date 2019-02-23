const express = require('express');
const router = express.Router();

/* GET volunteer page. */
router.get('/', function(req, res, next) {
  res.render('volunteer');
});

module.exports = router;