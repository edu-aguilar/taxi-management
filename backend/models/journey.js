var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var RideSchema   = require('mongoose').model('Ride').schema;

var JourneySchema   = new Schema({
    id: { type: String, required: true },
    startinglKm: { type: String, required: true },
    finishingKm: { type: String, required: true },
    startinglDate: { type: String, required: true },
    finishingDate: { type: String, required: true },
    rides: [RideSchema]
});

module.exports = mongoose.model('Journey', UserSchema);
