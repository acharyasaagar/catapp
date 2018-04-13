const 
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  dotenv = require('dotenv').config(),
  port = process.env.PORT,
  routes = require('./routes/index'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override')    

// Middlewares and Server Settings 
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ 
  extended: false
}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

// Connect to data base and start the server
mongoose.connect(`mongodb://${process.env.DB_USR}:${process.env.DB_PWD}@${process.env.DB_HOST}:27017/${process.env.DB_DATABASE}?authSource=admin`)
  .then(() => {
    console.log('Connected to mongo server')
    app.listen(port, () => console.log('Server started at port '+ port))
  })

  // Routes will be here 
routes(app) 
