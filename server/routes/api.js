// dependencies
const express = require('express');
const router = express.Router();

// controller
const {
  createGame, getGame, guessGame
} = require('../controller');


/* GET api listing. */
router.get('/', (req, res) => {
  res.status(200).send('api works');
});

// create a new game
router.post('/game', createGame);

// get a game
router.get('/game/:id', getGame);

// update a game
router.post('/guessGame/:id', guessGame);

module.exports = router;
