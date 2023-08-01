var express = require('express');
var router = express.Router();
const ticketsController = require('../controllers/tickets');

// GET /tickets
router.get('/', ticketsController.ticketsIndex);

module.exports = router;
