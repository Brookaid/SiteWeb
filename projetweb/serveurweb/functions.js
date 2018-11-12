const fs = require('fs');

exports.sendusers= function(req, res) {
  const username = req.body.username;
  const pw = req.body.password;
  const users = JSON.parse(fs.readFileSync('users.json'));
  res.send(users);
}

exports.sendarticles= function(req, res) {
  const articles = JSON.parse(fs.readFileSync('articles.json'));
  res.send(articles);
}
