const express = require('express');
const usersController = require('../controlers/users');
const auth = require('../helpers/auth');

const router = express.Router();

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  usersController.createUser(email, password)
    .then(user => auth.encodeToken(user[0]))
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token,
      });
    })
    .catch(() => {
      res.status(500).json({
        status: 'error',
      });
    });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  return usersController.getUser(email)
    .then((response) => {
      if (!auth.comparePass(password, response.password)) {
        throw new Error('Incorrect password');
      }
      return response;
    }).then(response => auth.encodeToken(response)).then((token) => {
      res.status(200).json({
        status: 'success',
        token,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        message: err,
      });
    });
});

router.get('/user', auth.ensureAuthenticated, (req, res) => {
  res.status(200).json({
    status: 'success',
    user: req.user,
  }).catch((err) => {
    res.status(500).json({
      status: 'error',
      message: err,
    });
  });
});

module.exports = router;
