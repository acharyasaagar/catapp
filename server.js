const 
  app = require('express')(),
  mongoose = require('mongoose'),
  dotenv = require('dotenv').config(),
  port = process.env.PORT

// Middlewares and Server Settings 

// Connect to data base and start the server
mongoose.connect(`mongodb://${process.env.DB_USR}:${process.env.DB_PWD}@${process.env.DB_HOST}:27017/${process.env.DB_DATABASE}?authSource=admin`)
  .then(() => {
    console.log('Connected to mongo server')
    app.listen(port, () => console.log('Server started at port '+ port))
  })
