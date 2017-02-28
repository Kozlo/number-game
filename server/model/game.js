const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
/**
 * Game model.
 *
 * @property {Number} number Number the user needs to guess
 * @property {Number} attempts Number of guesses the user has made
 * @property {Number} guesses Guesses the user has made
 * @property {Boolean} finished Flag showing if the game is finished or ongoing
 * @property {Boolean} won Flag showing if the user guessed the number (won)
 */
const schemaProps = {
  number: { type: Number, required: true },
  attempts: { type: Number, default: 0 },
  guesses: { type: Array, default: [] },
  finished: { type: Boolean, default: false },
  won: { type: Boolean, default: false }
};
const gameSchema = new Schema(schemaProps);
const User = mongoose.model('Game', gameSchema);

module.exports = User;
