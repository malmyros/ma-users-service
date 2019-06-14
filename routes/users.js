const express = require('express');
const usersController = require('../controlers/users');
const auth = require('../helpers/auth');

const router = express.Router();

router.post('/register', (req, res) => usersController.createUser(req.body.username, req.body.password)
  .then(user => auth.encodeToken(user[0])).then((token) => {
    res.status(200).json({
      status: 'success',
      token,
    });
  }).catch(() => {
    res.status(500).json({
      status: 'error',
    });
  }));

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  return usersController.getUser(username)
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
  });
});

module.exports = router;
