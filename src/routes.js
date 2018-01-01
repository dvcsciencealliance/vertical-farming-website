const express = require('express');
const path = require('path');

const router = express.Router();
const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('./lib/db');

router.use('/', express.static(path.join(__dirname, '../client/build')));

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

router.post('/data', (req, res) => {
  // pool.query("select * from data where username = $1", [req.body.username], function(err, response) {
  //   if (err) {
  //     return console.error('Error running query', err);
  //   }
  //   if (!response.rows[0]) {
  //     return res.json({
  //       success: false,
  //       message: 'Authentication failed.'
  //     });
  //   }
});

router.post('/login', (req, res) => {
  // bcrypt.hash("{ PASSWORD }", config.credentials.saltRounds).then(function(hash) {
  //   console.log(hash);
  // });
  pool.query('select * from users where username = $1', [req.body.username], (err, response) => {
    if (err) {
      return console.error('Error running query', err);
    }

    if (!response.rows[0]) {
      return res.json({
        success: false,
        message: 'Authentication failed.',
      });
    }

    const user = response.rows[0];

    bcrypt.compare(req.body.password, user.password).then(response => {
      if (!response) {
        return res.json({
          success: false,
          message: 'Authentication failed.',
        });
      }

      const tokenToSign = {
        username: user.username,
        password: user.password,
      };

      const token = jwt.sign(tokenToSign, config.credentials.secret, {
        expiresIn: 60, // expires in 1 hour
      });

      return res.json({
        success: true,
        message: 'Authentication succeeded.',
        token,
      });
    });
  });
});

router.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.credentials.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.send({
      success: false,
      message: 'No token provided.',
    });
  }
});

router.post('/token', (req, res) =>
  res.send({
    success: true,
    message: 'Authenticated.',
  })
);

router.get('/pump', (req, res) =>
  res.send({
    success: true,
    toggled: false,
  })
);

router.post('/pump', (req, res) =>
  res.send({
    success: true,
    message: 'Toggled.',
  })
);

module.exports = router;
