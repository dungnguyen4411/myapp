var express = require('express');
var router = express.Router();
var config = require('./../data/config')
config.selectUser()

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'ExpressIndex' });
});
module.exports = router;
