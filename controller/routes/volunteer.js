const express = require('express');
const router = express.Router();

/* GET volunteer page. */
router.get('/', function(req, res, next) {
  res.render('volunteer');
});

router.get('/select', function(req, res, next) {
  res.render('volunteerSelect');
});

module.exports = router;