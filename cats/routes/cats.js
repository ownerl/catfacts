var express = require('express');
var router = express.Router();

const catEndPoint = 'https://catfact.ninja';

// get /cats/fact
router.get('/fact', function(req,res,next) {
  fetch(`${catEndPoint}/fact`)
    .then(res => res.json())
    .then(factoid => {
      res.render('fact', {
        fact: factoid.fact,
      })
    })
  })

module.exports = router;
