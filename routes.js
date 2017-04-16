var express = require('express');
var path = require('path');
var router = express.Router();
var config = require('./config');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('./lib/db');

router.use('/', express.static(path.join(__dirname, 'client/build')));

router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
})

router.post('/login', function(req, res) {
  // bcrypt.hash("{ PASSWORD }", config.credentials.saltRounds).then(function(hash) {
  //   console.log(hash);
  // });
  pool.query("select * from users where username = $1", [req.body.username], function(err, response) {
    if (err) {
      return console.error('Error running query', err);
    }

    if (!response.rows[0]) {
      return res.json({
        success: false,
        message: 'Authentication failed.'
      });
    }

    const user = response.rows[0];

    bcrypt.compare(req.body.password, user.password)
    .then(function(response) {
      if (!response) {
        return res.json({
          success: false,
          message: 'Authentication failed.'
        });
      }

      var token = jwt.sign(user, config.credentials.secret, {
        expiresIn: 1440 // expires in 24 hours
      });

      return res.json({
        success: true,
        message: 'Authenticatoin succeedeed.',
        token: token
      });
    });
  });
});

module.exports = router;
