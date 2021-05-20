const router = require('express').Router();
const fetch = require('node-fetch');
const { Country } = require('../db.js');

router.get('/', async (req, res, next) => {
  if (!req.query.name) {
    const check = await Country.findAll({
      attributes: ['name', 'flag', 'region', 'alpha3code'],
    });
    if (!check[0]) {
      fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => response.json())
        .then(async (json) => {
          for (var i = 0; i < json.length; i++) {
            await Country.create({
              name: json[i].name || 'name not found',
              flag: json[i].flag || 'flag not found',
              region: json[i].region || 'continent not found',
              capital: json[i].capital || 'capital not found',
              subregion: json[i].subregion || 'subregion not found',
              area: json[i].area || 'area not found',
              population: json[i].population || 0,
              alpha3code: json[i].alpha3Code || 'XXX',
            });
          }
        })
        .then(async () => {
          const data = await Country.findAll({
            attributes: ['name', 'flag', 'region', 'alpha3code'],
          });
          res.json(data);
        })
        .catch((err) => new Error(err));
    } else {
      res.json(check);
    }
  } else {
    next();
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await Country.findOne({
      where: {
        name: req.query.name,
      },
    });
    res.json(data);
  } catch (e) {
    throw new Error(e);
  }
});

router.get('/:countryId', async (req, res) => {
  try {
    const data = await Country.findOne({
      where: { alpha3code: req.params.countryId },
    });
    res.json(data);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = router;
