var Journey = require('../models/journey.js');

exports.newJourney = newJourney;

function newJourney(req, res, next) {
    console.log(req.body);
    var journey = new Journey();
    journey.id = req.body.id;
    journey.startingKm = req.body.startingKm;
    journey.finishingKm = req.body.finishingKm;
    journey.startinglDate = req.body.startinglDate;
    journey.finishingDate = req.body.finishingDate;

    journey.save(function(err) {
        if (err){
            res.send(err);
        }
        res.json({ message: 'Journey created!' });
    });
}
