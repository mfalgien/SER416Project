const express = require('express');
const router = express.Router();

/* GET volunteer select page. */
router.get('/', function(req, res, next) {
  res.render('volunteerSelect');
});

module.exports = router;