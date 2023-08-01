var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');



router.get('/new',usersCtrl.new);
router.get('/new',usersCtrl.create);

module.exports = router;

