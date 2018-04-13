module.exports = (app) => {
  app.use('/', require('./modules/root'))
  app.use('/cats', require('./modules/cats'))
  app.use('/register', require('./modules/register'))
  app.use('/login', require('./modules/login'))
}