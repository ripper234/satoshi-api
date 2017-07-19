var express = require('express');        // call express

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'Welcome to Satoshi api server!' });
});
router.get('/login', function (req, res) {
    res.json({ message: 'You probably want to use HTTP POST' });
});
router.post('/login', function (req, res) {
    res.json({ status: 'STATUS_OK' });
});
// more routes for our API will happen here
module.exports = router;