module.exports = (model, data) => {
  return new Promise((resolve, reject) => {
    model.create(data, (err, data) => {
      resolve(true);
    })
  }); 
}