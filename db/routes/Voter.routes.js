const router = require('express').Router();
const {
  VoterBadge,
  MayorBadge,
  SosBadge,
  GubBadge,
  VeepBadge,
  PotusBadge
} = require('../models/Badges');


router.post('/api/voter_badge', async (req, res) => {
  const { url } = req.body;
  console.log(url)
  try {
    const voter = await VoterBadge.create({ url });
    voter ? res.status(201).send(voter) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error VOTER BADGE:', err);
  }
});

router.get('/api/voter_badge', async (req, res) => {
  try {
    const voter = await VoterBadge.find();
    voter ? res.status(200).send(voter) : res.sendStatus(404);
  }
  catch (err) {
    res.status(500).send('GET error VOTER BADGE: ', err);
  }
});



router.post('/api/mayor_badge', async (req, res) => {
  const { url } = req.body;
  console.log(url)
  try {
    const voter = await MayorBadge.create({ url });
    voter ? res.status(201).send(voter) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error VOTER BADGE:', err);
  }
});

router.get('/api/mayor_badge', async (req, res) => {
  try {
    const voter = await MayorBadge.find();
    voter ? res.status(200).send(voter) : res.sendStatus(404);
  }
  catch (err) {
    res.status(500).send('GET error VOTER BADGE: ', err);
  }
});

module.exports = router;