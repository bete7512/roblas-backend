const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const initModels = require('../models/init-models');
const { sequelize } = require('../configuration/db');
const { auth } = require('../middleware/authorizer');
const config = require('../configuration/keys');
dotenv.config();
const router = express.Router();

const models = initModels(sequelize);
const User = models.users;

router.post('/login', function (req, res) {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ errors: error.array() });
    }
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ where: { username: username } }).then(function (user) {
      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      bcrypt.compare(password, user.password).then(function (isMatch) {
        if (!isMatch) {
          return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(payload, config.server.JWT_SECRET, { expiresIn: 360000 }, function (err, token) {
          if (err) throw err;
          res.json({ token: token });
        });
      });
    });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
