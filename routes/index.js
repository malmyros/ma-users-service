const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = router;
