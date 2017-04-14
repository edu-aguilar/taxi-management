var Journey = require('../models/journey.js');

exports.newJourney = newJourney;
exports.getAllJourneys = getAllJourneys;
exports.getJourneyById = getJourneyById;

function newJourney(req, res, next) {
  console.log(req.body);
  var journey = new Journey();
  journey.id = req.body.id;
  journey.startingKm = req.body.startingKm;
  journey.finishingKm = req.body.finishingKm;
  journey.startinglDate = req.body.startinglDate;
  journey.finishingDate = req.body.finishingDate;

  //check before save if id property does not exist?!?!?!
  journey.save(function(err) {
      if (err){
          res.send(err);
      }
      res.json({ message: 'Journey created!' });
  });
}

function getAllJourneys(req, res) {
  Journey.find(function(err, journeys) {
    if (err){
      res.send(err);
    }
    res.json(journeys);
  });
}

function getJourneyById(req, res) {
  //change in a future with _id property.
  Journey.findOne({id:req.params.journeyId}, function(err, journey) {
    if (err){
      res.send(err);
    }
    res.json(journey);
  });
}
