const sharp = require('sharp')

const resize = (input, output, w, h) => {
    return new Promise((resolve, reject) => {
      sharp(input).
          resize(w, h).
          toFile(output, (err, info) => {
            if (err)
              reject(err)
            if (info)
              resolve(info)
          })
    })
  }
module.exports = resize
