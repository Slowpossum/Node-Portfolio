var express = require("express");
var path = require('path');

router.get("/api/images/", function (req, res) {
    res.json(images);
});