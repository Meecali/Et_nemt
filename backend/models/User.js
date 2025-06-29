const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['admin', 'dispatcher', 'driver'], default: 'dispatcher' }
});
module.exports = mongoose.model('User', userSchema);
