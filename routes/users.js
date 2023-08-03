var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

const ensureLoggedIn = require('../config/ensureLoggedIn'); 
// GET index
router.get('/index',ensureLoggedIn,usersCtrl.index);
// users/new
router.get('/new',ensureLoggedIn,usersCtrl.new);
//Get one user/show
router.get('/:id',ensureLoggedIn, usersCtrl.show);
// create 
router.post('/',ensureLoggedIn,usersCtrl.create);
// edit
router.get('/:id/edit',ensureLoggedIn,usersCtrl.edit);
// delete
router.delete('/delete',ensureLoggedIn, usersCtrl.delete);
//update
router.put('/:id',ensureLoggedIn, usersCtrl.update);

module.exports = router;


