//file : routes/tickets.js
var express = require('express');
var router = express.Router();
const ticketsController = require('../controllers/tickets');

// GET /tickets
router.get('/', ticketsController.ticketsIndex);
// GET /tickets/new (showing new ticket page)
router.get('/new', ticketsController.showNewTicketPage);
// POST /tickets (actually creating new ticket)
router.post('/', ticketsController.createTicket);
// GET /tickets/:id
 router.get('/:id', ticketsController.showTicket);

module.exports = router;
