var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/articles', function(req, res) {
  const articles = JSON.parse(fs.readFileSync('articles.json'));
  res.json(articles);
});

module.exports = router;