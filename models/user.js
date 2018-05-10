const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  plan: Array
});

let user = mongoose.model('user', userSchema);

module.exports = user;
