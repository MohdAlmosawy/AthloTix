var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');


// GET index
router.get('/index',usersCtrl.index);
// users/new
router.get('/new',usersCtrl.new);
//Get one user/show
router.get('/:id', usersCtrl.show);
// create 
router.post('/',usersCtrl.create);

module.exports = router;


