var express = require('express');
var router = express.Router();
const ticketsController = require('../controllers/tickets');

// GET /tickets
router.get('/', ticketsController.ticketsIndex);
// GET /tickets/new
router.get('/new', ticketsController.newTicket);

module.exports = router;
