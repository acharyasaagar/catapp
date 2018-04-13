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
router.route('/:id')
  .get((req, res) => {
    Cats.findById(req.params.id, (err, cat) => {
      res.render('cat', { cat })      
    })
  })
  .delete((req, res) => {
   Cats.findByIdAndRemove(req.params.id)
   .then(() => res.redirect('/'))
  })
  .put((req, res) => {
    Cats.findByIdAndUpdate(req.params.id, req.body, (err, cat) => {
      res.redirect(`/cats/${req.params.id}`)      
    })
  })
router.route('/:id/edit')
  .get((req, res) => {
    Cats.findById(req.params.id, (err, cat) => {
      res.render('edit', { cat })      
    })
  })

module.exports = router