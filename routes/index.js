var express = require('express');
var router = express.Router();

/* GET home page. */
var Acounter = 0;
var Bcounter = 0;

router.get('/', function(req, res, next) {
  if(Math.random()>.5){
    Acounter += 1;
    res.render('index', { title: 'CFB-A', counter: Acounter });
  }
  else{
    Bcounter += 1;
    res.render('index', { title: 'CFB-B', counter: Bcounter });

  }
});

module.exports = router;
