const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: String,
  location: {
    lat: Number,
    lng: Number
  },
  available: Boolean
});

module.exports = mongoose.model('Driver', driverSchema);
