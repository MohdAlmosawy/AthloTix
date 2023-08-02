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
// edit
router.get('/:id/edit',usersCtrl.edit);
// delete
router.delete('/delete', usersCtrl.delete);
//update
router.put('/:id', usersCtrl.update);

module.exports = router;


