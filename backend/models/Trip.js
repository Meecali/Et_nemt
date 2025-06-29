const mongoose = require('mongoose');
const tripSchema = new mongoose.Schema({
  patientName: String,
  pickupLocation: String,
  dropoffLocation: String,
  scheduledTime: String,
  driverId: String,
  status: { type: String, default: 'Scheduled' },
  notes: String
}, { timestamps: true });
module.exports = mongoose.model('Trip', tripSchema);
