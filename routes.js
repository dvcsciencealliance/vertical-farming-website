var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

module.exports = router;
