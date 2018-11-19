var express = require('express')
var router = express.Router()
const listArticles = require('../json/articles.json')
const users = require('../json/users.json')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})

/* Articles */
router.get('/list', (req, res) => {
    res.json(listArticles);
})

router.post('/add', (req, res) => {
    listArticles.push(req.body)
    console.log(listArticles)
    res.status(200).send('OK')
})

router.post('/delete', (req, res) => {
    //splice permet de delete sur une longueur souhaitée
    listArticles.splice(req.body.index, 1)
    for (let i = 0; i < listArticles.length; i++) {
        listArticles[i].index = i
    }
    res.status(200).send('all good')
})

router.post('/edit', (req, res) => {
    listArticles[req.body.index] = req.body
    res.status(200).send('all good')
})



/* Users */
router.get('/user', (req, res, next) => {
    console.log(req.session.user)
    if (req.session.user) {
        res.json(req.session.user)
    }
})
router.post('/login', (req, res, next) => {

    const inputUser = req.body
    let user = null
    let message = 'Identifiants incorrects'
    //normalement inutile avec les required
    if (typeof inputUser.username !== 'string' || !inputUser.username) {
        message = 'Login pas défini'
    }
    //normalement inutile avec les required
    if (typeof inputUser.password !== 'string' || !inputUser.password) {
        message = 'Verifiez les mots de passe'
    }

    for (let i = 0; i < users.length; i++) {
        const currentUser = users[i]
        if (currentUser.username === inputUser.username) {
            if (inputUser.password === currentUser.password) {
                user = currentUser
                break
            } else {
                message = 'Mot de passe incorrect'
            }
        }
    }

    if (user != null) {
        message = 'Connexion réussie'
        req.session.user = {username: user.username}
        res.status(200).send(message)
    }
    else {
        res.status(201).send(message)

    }

})

router.get('/logout', (req, res, next) => {
    req.session.destroy(function (err) {
        res.status(200).send('Déconnexion')

    })
})

router.post('/register', (req, res, next) => {
    var message = 'Votre inscription est terminée'
    for (userDb of users) {
        if (userDb.username === req.body.username) {
            message = 'Attention, cela existe déjà !'
        }
    }

    if (message === 'Votre inscription est terminée') {

        let mdp = req.body.password
        const userObject = {username: req.body.username, password: mdp}
        users.push(userObject)
        res.status(200).send(message)
    } else {
        res.status(201).send(message)
    }

})

module.exports = router
