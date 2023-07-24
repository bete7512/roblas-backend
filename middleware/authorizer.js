var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
var sequelize = require('../configuration/db').sequelize;
var initModels = require('../models/init-models').initModels;
var config = require('../configuration/keys');
dotenv.config();

var auth = function(req, res, next) {
  var authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  var token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  try {
    var decoded = jwt.verify(token, config.server.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized User' });
  }
};

module.exports = {
  auth: auth
};
