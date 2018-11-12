var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   const articles = JSON.parse(fs.readFileSync('articles.json'));
  res.send(articles);
});

module.exports = router;
