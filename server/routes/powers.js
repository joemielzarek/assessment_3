var express = require('express');
var router = express.Router();
var path = require('path');
var SuperPower = require('../models/power');

router.get('/', function (req, res) {
  SuperPower.find({}, function (err, powers) {

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(powers);
  });
});

module.exports = router;
