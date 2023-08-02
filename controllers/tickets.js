//file : controllers/tickets.js
const Ticket = require("../models/ticket");
const User = require("../models/user");

async function ticketsIndex(req, res) {
  const AllTickets = await Ticket.find({});
  res.render('tickets/index', { title: 'All Tickets', AllTickets });
}

function showNewTicketPage(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('tickets/new', { title: 'Create New Ticket', errorMsg: '' });
}

//createTicket

// async function createTicket(req, res) {
//   try {
//     const myLocalTicket = await Ticket.create(req.body);
//     res.redirect(`/tickets/${myLocalTicket._id}`);
//   } catch (err) {
//     console.log(err);
//     res.render('tickets/new', { title: 'Create New Ticket', errorMsg: err.message });
//   }
// }

async function createTicket(req, res) {
  // Get the form data from the request body
  const { user, category, status, title, description } = req.body;

  try {
    // Create a new ticket document in the database
    const newTicket = await Ticket.create({
      user,
      category,
      status,
      title,
      description,
      history: [{ status, date: Date.now() }], // Initialize the history as an empty array
      comments: [] // Initialize the comments as an empty array
    });

    // Redirect to a success page or the ticket details page
    res.redirect(`/tickets/${newTicket._id}`);
  } catch (err) {
    // Handle any errors that occur during ticket creation
    console.log(err);
    // You can render an error page or redirect back to the form with an error message
    res.render('tickets/new', { title: 'Create New Ticket', errorMsg: 'Error creating ticket' });
  }
}

//showTicket

async function showTicket(req, res) {
  try {
    const thisLocalTicket = await Ticket.findById(req.params.id);
    res.render('tickets/show', { title: 'Ticket', thisLocalTicket });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  ticketsIndex,
  showNewTicketPage,
  createTicket,
  showTicket,
};

// module.exports = {
//   new: newTicket,
//   create,
// };

// async function newTicket(req, res) {
//   //Sort tickets
//   const userId = req.params.id;
//   res.render("tickets/new", { userId, title: "Add Ticket" });
// }

// async function create(req, res) {
//   const userId = req.body.user;
//   try {
//     await Ticket.create(req.body);
//     res.redirect(`/users/${userId}`);
//   } catch (err) {
//     console.log(err);
//   }
// }
