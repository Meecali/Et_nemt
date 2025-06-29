const router = require('express').Router();
const Driver = require('../models/Driver');

router.get('/', async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
});

router.post('/', async (req, res) => {
  const driver = new Driver(req.body);
  await driver.save();
  res.json(driver);
});

router.put('/:id', async (req, res) => {
  const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(driver);
});

module.exports = router;
