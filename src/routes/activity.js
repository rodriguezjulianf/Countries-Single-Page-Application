const router = require('express').Router();
const { Activity, Country } = require('../db.js');
const { v4: uuidv4 } = require('uuid');

router.get('/', async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: [
        {
          model: Country,
        },
      ],
    });
    res.status(200).send(activities);
  } catch (err) {
    res.status(400).send(`GET didn't work`, err);
  }
});

router.post('/', async (req, res) => {
  try {
    const activity = req.body.activity;
    const newActivity = await Activity.create({
      id: uuidv4(),
      name: activity.name,
      difficulty: activity.difficulty,
      duration: activity.duration,
      season: activity.season,
    });
    await newActivity.addCountries(activity.country);
    res.status(201).send('Activity created');
  } catch (err) {
    res.status(400).send('Activity was not created due to', err);
  }
});

module.exports = router;
