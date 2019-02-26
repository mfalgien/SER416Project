const express = require('express');
const router = express.Router();

/* GET admin page. */
router.get('/', function (req, res, next) {
    res.render('admin');
});

router.get('/course', function (req, res, next) {
    res.render('course');
});

router.get('/service', function (req, res, next) {
    res.render('service');
});

router.get('/equipment', function (req, res, next) {
    res.render('equipmentadd');
});

router.get('/space', function (req, res, next) {
    res.render('spaceadd');
});

module.exports = router;