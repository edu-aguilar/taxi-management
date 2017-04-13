var Journey = require('../models/journey.js');

exports.newJourney = newJourney;

function newJourney(req, res, next) {
    var journey = new Journey();
    journey.id = req.body.id;

    journey.save(function(err) {
        if (err){
            res.send(err);
        }
        res.json({ message: 'Journey created!' });
    });

}
