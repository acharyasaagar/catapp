module.exports = (app) => {
  app.use('/', require('./modules/root'))
  app.use('/cats', require('./modules/cats'))
}