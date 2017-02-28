/**
 * Helpers for the number game API.
 */
module.exports = {
  /**
   * Generates a random number withing the specified range.
   *
   * @public
   * @param {number} min Minimum acceptable number (inclusive)
   * @param {number} max Maximum acceptable number (inclusive)
   * @returns {number} Number in the specified range
   */
  generateNumberInRange(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
};
