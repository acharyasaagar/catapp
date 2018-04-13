const mongoose = require('mongoose')

const catsSchema = mongoose.Schema({
  title: String,
  details: String,
  image: String
})

const Cats = mongoose.model('Cats', catsSchema)
module.exports = Cats