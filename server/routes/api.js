const express = require('express');
const router = express.Router();
const Game = require('../model/game');

/* GET api listing. */
router.get('/', (req, res) => {
  res.status(200).send('api works');
});

// create a new game
router.post('/game', (req, res) => {

});

// get a game
router.get('/game:id', (req, res) => {

});

// update a game
router.patch('/game:id', (req, res) => {

});

module.exports = router;
