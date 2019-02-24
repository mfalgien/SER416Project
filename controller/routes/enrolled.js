const express = require('express');
const router = express.Router();

/* GET enrolled page. */
router.get('/', function(req, res, next) {
  res.render('enrolled');
});

module.exports = router;