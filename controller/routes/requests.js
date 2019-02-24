const express = require('express');
const router = express.Router();

/* GET requests page. */
router.get('/', function(req, res, next) {
  res.render('requests');
});

module.exports = router;