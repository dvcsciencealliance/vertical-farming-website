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
        expiresIn: 60 // expires in 1 hour
      });

      return res.json({
        success: true,
        message: 'Authentication succeeded.',
        token: token
      });
    });
  });
});

router.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.credentials.secret, function(err, decoded) { 
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });
  } else {
    return res.send({ 
      success: false, 
      message: 'No token provided.' 
    }); 
  }
});

router.post('/token', function(req, res) {
  return res.send({ 
    success: true, 
    message: 'Authenticated.' 
  }); 
});

router.get('/pump', function(req, res) {
  return res.send({ 
    success: true,
    toggled: false 
  }); 
});

router.post('/pump', function(req, res) {
  return res.send({ 
    success: true, 
    message: 'Toggled.'
  }); 
});

module.exports = router;
