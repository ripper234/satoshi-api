var express = require('express');        // call express

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'Welcome to Satoshi api server!' });
});
router.post('/login', function (req, res) {
    let nickname = req.body.nickname
    if (!nickname) {
        res.status(400).send('Missing nickname');
    }
    switch (nickname) {
        case 'ron':
        case 'sharon':
            res.json({ status: 'STATUS_OK' });
            return;
    }

    res.json({ statis: 'STATUS_NOT_AUTHORIZED' })
});
// more routes for our API will happen here
module.exports = router;