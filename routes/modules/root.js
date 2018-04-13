const
  express = require('express'),
  router = express.Router(),
  Cats = require('../../models/cats')

router.route('/')
  .get((req, res) => {
    Cats.find({}, (err, cats) => {
      if(err) {
        console.log(err)
      }
    }).then((cats) => {
      res.render('index', { cats })
    })
  })

module.exports = router