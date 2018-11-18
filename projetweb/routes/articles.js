var express = require('express');
var router = express.Router();
var requestURL = '../articles.json';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var articles = request.response;
  showArticles(articles);
}

function showArticles (jsonObj) {
    var users = jsonObj['articles'];

    for (var i = 0; i < articles.length; i++) {
        var myArticle = document.createElement('article');
        var ligue = document.createElement('p');
        var titre = document.createElement('p');
        var texte = document.createElement('p');
        ligue.textContent = articles[i].categorie;
        titre.textContent = articles[i].titre;
        texte.textContent = users[i].texte;


        myArticle.appendChild(ligue);
        myArticle.appendChild(titre);

        section.appendChild(myArticle);

        document.write(section);
        document.write(ligue);
        document.write(titre);
        document.write(texte);
    }
}

/* GET users listing. */
router.get('/', function(req, res) {
  var articles = request.response;
  res.send(articles);
});

module.exports = router;