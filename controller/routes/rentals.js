const express = require('express');
const router = express.Router();

/* GET rentals page. */
router.get('/', function (req, res, next) {
    res.render('rentals');
});

router.get('/spaces', function (req, res, next) {
    res.render('spaces');
});

router.get('/equipment', function (req, res, next) {
    res.render('equipment');
});



module.exports = router;