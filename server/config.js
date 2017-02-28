/**
 * Config for the number game API.
 *
 * @property {Object} gameRange Range of numbers the user has to guess in
 * @property {number} gameRange.min Min number in the range
 * @property {number} gameRange.max Max number in the range
 * @property {number} maxAttempts The number of attempts the user can do before losing the game
 */
module.exports = {
  gameRange: {
    min: 1,
    max: 5
  },
  maxAttempts: 3
};
