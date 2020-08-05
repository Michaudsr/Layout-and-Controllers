const express = require('express');
const router = express.Router();


router.get('/foods', (req, res)=> {
    res.render('hates/foods', {title: 'Hate Foods', foods: ['coconut', 'avocado']});
  });
  
  router.get('/animals', (req, res)=> {
    res.render('hates/animals', {title: 'Hate Animals', animals: ['sand crab', 'corny joke dog']})
  });


module.exports = router;