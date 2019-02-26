const express = require('express');
const router = express.Router();

/* GET courselist page. */
router.get('/', function(req, res, next) {
  res.render('courselist');
});

module.exports = router;