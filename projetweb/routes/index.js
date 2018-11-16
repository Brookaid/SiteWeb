var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: false, errors: req.session.errors });
  req.session.errors = null;
})

/*router.post('/',function (req,res,next) {
    //check validity
    req.check('pseudo','Invalid pseudo').isLength({min: 4});
    req.check('pswd','Invalid pseudo').isLength({min: 4}).equals(req.body.pswd-repeat);

    var errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
    }
    res.redirect('/')
})
*/
module.exports = router
