var mongoose     = require('mongoose');
mongoose.Promise = global.Promise;
var Schema       = mongoose.Schema;

var RideSchema   = new Schema({
    id: { type: String, required: true },
    amount: { type: String, required: true },
    time: { type: String, required: true },
    endingLocation: { type: String, required: true },
    paidMethod: { type: String, required: true },
    driverId: { type: Number, required: true }
});

module.exports = mongoose.model('Ride', RideSchema);
