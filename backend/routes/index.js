module.exports = app => {

  app.use('/api/color', require('./color'));
  app.use('/api/user', require('./user'))
  
};