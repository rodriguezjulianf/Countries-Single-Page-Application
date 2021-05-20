const router = require('express').Router();
const { Activity } = require('../db.js');

router.post('/', async (req, res) => {
  //req.body me llega la data del formulario
  try {
    const activity = req.body.activity;
    const newActivity = await Activity.create({
      name: activity.name,
      difficulty: activity.difficulty,
      duration: activity.duration,
      season: activity.season,
    });
    activity.country.forEach(async (country) => {
      await newActivity.addCountry(country);
    });
    res.status(201).send('Activity created');
  } catch (err) {
    res.status(420).send('Activity was not created due to', err);
  }
});

module.exports = router;
