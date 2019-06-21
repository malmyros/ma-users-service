const express = require('express');
const usersController = require('../controlers/users');
const auth = require('../helpers/auth');

const router = express.Router();

router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

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

router.get('/user/:userId', auth.ensureAuthenticated, (req, res) => {
  res.status(200).json({
    status: 'success',
    user: req.user,
  });
});

router.put('/user/:userId', auth.ensureAuthenticated, (req, res) => {
  const { firstName, lastName } = req.body;
  return usersController.updateUser(req.user.userId, firstName, lastName)
    .then(() => {
      res.status(201).json({
        status: 'success',
      });
    }).catch(() => {
      res.status(404).json({
        status: 'not found',
      });
    });
});

router.delete('/user/:userId', auth.ensureAuthenticated, (req, res) => usersController.deleteUser(req.user)
  .then(() => {
    res.status(200).json({
      status: 'success',
      user: req.user,
    });
  }).catch(() => {
    res.status(404).json({
      status: 'error',
    });
  }));

module.exports = router;
