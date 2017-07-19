const express = require('express');        // call express

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'Welcome to Satoshi api server!' });
});
router.post('/login', function (req, res) {
    let nickname = req.body.nickname
    if (!nickname) {
        res.status(400).send('Missing nickname');
        return;
    }
    switch (nickname) {
        case 'ripper234':
        case 'sharon':
            res.json({ status: 'STATUS_OK' });
            return;
    }

    res.json({ status: 'STATUS_NOT_AUTHORIZED' })
});
// more routes for our API will happen here
router.post('/addfriend', function (req, res) {
    let nickname = req.body.nickname;
    if (!nickname) {
        res.status(400).send('Missing nickname');
        return;
    }
  switch (nickname) {
    case 'Captain Marvel':
    case 'BatWoman':
      res.json({ status: 'STATUS_OK' });
      return;
  }

  res.json({ status: 'STATUS_NOT_AUTHORIZED' })

});

router.get('friendlist', function(req, res) {
  res.json(['Ms. Marvel', 'Black Widow', 'She Hulk'])
});
module.exports = router;