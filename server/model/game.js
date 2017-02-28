const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const gameSchema = new Schema({
  attempts: Number,
  status: Boolean
});

const User = mongoose.model('Game', gameSchema);

module.exports = User;
