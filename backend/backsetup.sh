mkdir -p routes models

# Create routes/auth.js
cat << 'EOF' > routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin@example.com' && password === 'password123') {
    const token = jwt.sign({ role: 'admin', email }, 'secretkey', { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
EOF

# Create routes/users.js
cat << 'EOF' > routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ name: 'Admin', email: 'admin@example.com', role: 'admin' }]);
});

module.exports = router;
EOF

# Create routes/trips.js
cat << 'EOF' > routes/trips.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, status: 'Scheduled', patient: 'John Doe' }]);
});

module.exports = router;
EOF

# Create models/User.js
cat << 'EOF' > models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
EOF

# Create models/Trip.js
cat << 'EOF' > models/Trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  patient: String,
  pickupLocation: String,
  dropoffLocation: String,
  time: Date,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
EOF
