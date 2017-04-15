var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //to POST operations.
var mongoose = require('mongoose');
var morgan = require('morgan');
var config = require('./backend/config.js');
var common = require('./backend/common.js');
var Ride = require('./backend/models/ride.js');
var Journey = require('./backend/models/journey.js');
var journeyApi = require('./backend/controllers/journey.controller.js');
var riderApi = require('./backend/controllers/ride.controller.js');

mongoose.connect(config.database); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// ----------------------------------------------------
// -----------------------API--------------------------
// ----------------------------------------------------

router.route('/journey')
    .post(journeyApi.newJourney)
    .get(journeyApi.getAllJourneys);

router.route('/journey/:journeyId')
    .get(journeyApi.getJourneyById);

router.route('/journey/:journeyId/ride')
    .post(riderApi.newRide)
    .get(riderApi.getAllRides);

// middleware to use for all requests
router.use(common.middleware);


// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(3000, function () {
  console.log('Example app listening on localhost:3000/api');
});
