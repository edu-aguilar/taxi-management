var Journey = require('../models/journey.js');
var Ride = require('../models/ride.js');

exports.newRide = newRide;
exports.getAllRides = getAllRides;
exports.getRideById = getRideById;

function newRide(req, res) {

  Journey.findOne({id: req.params.journeyId}, function(err, journey) {
        if (err){
          res.send(err);
        } else {
            var ride = new Ride();
            ride.id = req.body.id;
            ride.amount = req.body.amount;
            ride.time = req.body.time;
            ride.endingLocation = req.body.endingLocation;
            ride.paidMethod = req.body.paidMethod;
            ride.driverId = req.body.driverId;

            journey.rides.push(ride);

            journey.save(function(err) {
                if (err){
                    res.send(err);
                }
                res.json({ message: 'ride created to journey!' });
            });
        }
    });

}

function getAllRides(req, res) {

  Journey.findOne({id: req.params.journeyId}, function(err, journey) {
        if (err){
          res.send(err);
        }
        res.json(journey.rides);
    });

}

function getRideById(req, res) {

  Journey.findOne({id: req.params.journeyId}, function(err, journey) {
        if (err){
          res.send(err);
        }
        var l = journey.rides.length;
        for (var i = 0; i < l; i++) {
          if (journey.rides[i].id === req.params.rideId) {
            res.json(journey.rides[i]);
          }
        }
    });
}
