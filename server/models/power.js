var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for the hero
var SuperPowerSchema = new Schema({

  power_name: { type: String, required: true, index: { unique: true } },

});

var SuperPower = mongoose.model('SuperPower', SuperPowerSchema);

module.exports = SuperPower;
