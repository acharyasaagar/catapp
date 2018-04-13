const
  express = require('express'),
  router = express.Router(),
  Cats = require('../../models/cats'),
  postData = require('../../services/postDataToDb')

router.route('/')
  .get((req, res) => {
    res.redirect('/')
  })
  .post((req, res) => {
    postData(Cats, req.body)
    res.redirect('/')
  })
router.route('/new')
  .get((req, res) => {
    res.render('new')
  })

module.exports = router