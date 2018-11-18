var express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')
const listArticles = require('../db/articles.json')
const users = require('../db/users.json')
const fs = require('fs')

//const USERS_PATH = 'db/users.json'


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})

//Articles
router.get('/list', (req, res) => {
    res.json(listArticles);
})

router.post('/add', (req, res) => {
    listArticles.push(req.body)
    console.log(listArticles)
    res.status(200).send('OK')
})

router.post('/edit', (req, res) => {
    listArticles[req.body.index] = req.body
    res.status(200).send('OK')
})

router.post('/delete', (req, res) => {
    console.log('ok')
    listArticles.splice(req.body.index, 1)
    for (let i = 0; i < listArticles.length; i++) {
        listArticles[i].index = i
    }
    res.status(200).send('OK')
})

//Users


/*router.get('/us', (req, res) => {
    res.json(users);
})  --> it was in order to test */

router.get('/user', (req, res, next) => {
    console.log(req.session.user)
    if (req.session.user) {
        res.json(req.session.user)
    }
})
router.get('/logout', (req, res, next) => {
    req.session.destroy(function (err) {
        res.status(200).send('Déconnexion')
    })
})
router.post('/login', (req, res, next) => {

    const inputUser = req.body
    let user = null
    let message = 'Identifiants incorrects'

    if (typeof inputUser.username !== 'string' || !inputUser.username) {
        //throw new Error("username n'est pas défini");
        message = 'Login non défini'
    }

    if (typeof inputUser.password !== 'string' || !inputUser.password) {
        //throw new Error("password n'est pas défini");
        message = 'Mot de passe non défini'
    }

    for (let i = 0; i < users.length; i++) {
        const currentUser = users[i]
        //console.log(currentUser);
        if (currentUser.username === inputUser.username) {
            if (bcrypt.compareSync(inputUser.password, currentUser.password)) {
                // Passwords match
                user = currentUser
                break
            } else {
                // Passwords don't match
                message = 'Mot de passe incorrect'
            }
        }
    }

    if (user != null) {
        //console.log("User not null");
        message = 'Connexion réussie'
        req.session.user = {username: user.username}
        res.status(200).send(message)
    }
    else {
        //console.log("ELSE");
        res.status(201).send(message)

    }
    //console.log('User : ' + user.username)
    //console.log('message: ' + message)

})
module.exports = router
