// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Logger
var logger = function (req, res, next) {
    console.log(req.method +
        (req.query ? JSON.stringify(req.query) : "") +
        (req.body ? JSON.stringify(req.body) : ""))
    next(); // Passing the request to the next handler in the stack.
}
app.use(logger); // Here you add your logger to the stack.

var port = process.env.PORT || 8080;        // set our port

var api = require('./api.js');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', api);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);