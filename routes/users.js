var express = require('express');
var router = express.Router();

// Create two variables for this endpoint
let factor = 2;
let current = 25;

/* GET users listing. */
router.get('/', function(req, res, next) {
  current = current * factor; // multiply each time you refresh
  res.send(`Current is: ${current}`);
});

module.exports = router;
