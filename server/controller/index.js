// helpers & config
const config = require('../config');
const helpers = require('../helpers');

// models
const Game = require('../model/game');

/**
 * Numbers game controllers.
 */
module.exports = {
  /**
   * Creates a new game.
   *
   * @public
   * @param {Object} req Request object
   * @param {Object} res Response object
   * @param {Function} next Executes the next matching route
   */
  createGame(req, res, next) {
    const { min, max } = config.gameRange;
    const number = helpers.generateNumberInRange(min, max);
    const gameProps = { number };
    const game = new Game(gameProps);

    game.save()
      .then(newGame => {
        newGame.number = undefined;

        res.status(201).send(newGame);
      })
      .catch(err => next(err));
  },

  /**
   * Get an existing game.
   *
   * @public
   * @param {Object} req Request object
   * @param {Object} res Response object
   * @param {Function} next Executes the next matching route
   */
  getGame(req, res, next) {
    const gameId = req.params.id;

    Game.findById(gameId)
      .then(game => {
        game.number = undefined;

        res.status(200).send(game);
      })
      .catch(err => next(err));
  },

  /**
   * Processes an attempt to guess a game's number.
   *
   * @public
   * @param {Object} req Request object
   * @param {Object} res Response object
   * @param {Function} next Executes the next matching route
   */
  guessGame(req, res, next) {
    const { maxAttempts } = config;
    const { number } = req.body;
    const gameId = req.params.id;

    Game.findById(gameId)
      .then(game => {
        if (!game) {
          res.status(404).send(`Game with ID ${gameId} not found!`);
        }

        if (game.finished === true) {
          return game;
        }

        game.attempts += 1;

        if (parseInt(game.number, 10) === parseInt(number, 10)) {
          game.won = true;
          game.finished = true;
        } else if (game.attempts >= maxAttempts) {
          game.finished = true;
        }

        return game.save();
      })
      .then(game => {
        game.number = undefined;

        res.status(200).send(game);
      })
      .catch(err => next(err));
  }
};
