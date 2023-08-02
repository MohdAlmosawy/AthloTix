var express = require('express');
var router = express.Router();
var router = require('express').Router();
// new code below
const passport = require('passport');

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // the redirect location to dashboard
    successRedirect: '/users/index', 
    failureRedirect: '/'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/movies');
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
