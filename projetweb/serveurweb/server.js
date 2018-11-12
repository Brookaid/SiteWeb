const express = require('express');
const cors = require('cors');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// enable CORS for all requests
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// serve front-end application
app.use('/', serveStatic(path.join(__dirname, '../..', 'chemin/racine/html')));

// import controllers
const fonctions = require('./functions');


// initialize the router
const router = express.Router();

/// LISTINGS ROUTES ///
router.get('/users', fonctions.sendusers);
router.get('/articles', fonctions.sendarticles);

/// AUTH ROUTES ///

app.use('/api', router);

app.listen(3000, function () {
	console.log('API listening on port 3000!')
});
