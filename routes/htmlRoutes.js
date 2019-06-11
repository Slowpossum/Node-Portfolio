var express = require("express");
var path = require('path');

var router = express.Router();

//Routes
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/fanpage", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/fanpage.html'));
});

module.exports = router;