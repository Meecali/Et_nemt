const router = require('express').Router();
const Trip = require('../models/Trip');

router.get('/', async (req, res) => {
  const trips = await Trip.find().sort({ createdAt: -1 });
  res.json(trips);
});

router.post('/', async (req, res) => {
  const newTrip = new Trip(req.body);
  await newTrip.save();
  res.json(newTrip);
});

router.put('/:id', async (req, res) => {
  const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(trip);
});

module.exports = router;
