const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const usersModel = require('../models/users');

const comparePass = (userPassword, databasePassword) => bcrypt.compareSync(userPassword, databasePassword);

const decodeToken = (token, callback) => {
  const payload = jwt.decode(token, process.env.TOKEN_SECRET);
  const now = moment().unix();
  if (now > payload.exp) callback('Token has expired');
  else callback(null, payload);
};

const encodeToken = (user) => {
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id,
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
};

// eslint-disable-next-line consistent-return
const ensureAuthenticated = (req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'Please log in',
    });
  }

  const header = req.headers.authorization.split(' ');
  const token = header[1];
  decodeToken(token, (err, payload) => {
    if (err) {
      return res.status(401).json({
        status: 'Token has expired',
      });
    }

    return usersModel.getUserById(payload.sub)
      .then((user) => {
        req.user = user.id;
        return next();
      }).catch(() => res.status(500).json({
        status: 'error',
      }));
  });
};

module.exports = {
  comparePass,
  decodeToken,
  ensureAuthenticated,
  encodeToken,
};
