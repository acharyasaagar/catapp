const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  password: String
})

const Users = mongoose.model('Users', userSchema);
module.exports = User