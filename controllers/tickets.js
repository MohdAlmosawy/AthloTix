//file : controllers/tickets.js
const Ticket = require("../models/ticket");
const User = require("../models/user");

async function ticketsIndex(req, res) {
  const user = await User.findById(req.user._id);
  let allTickets = user.type === 'athlete' ? await Ticket.find({ user: req.user._id }) : await Ticket.find({})
  
  res.render('tickets/index', { title: 'All Tickets', allTickets });
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
  const { category, status, title, description } = req.body;

  try {
    // Create a new ticket document in the database
    const newTicket = await Ticket.create({
      user: req.user._id,
      category,
      status,
      title,
      description,
      history: [{ status, date: Date.now(), userName: req.user.name }], // Initialize the history as an empty array
      comments: [], // Initialize the comments as an empty array
      userName: req.user.name, // Set the userName field
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

async function updateTicketCategory(req, res) {
  try {
      const thisTicketId = req.params.id;
      const newCategory = req.body.category;

      // Find the ticket by ID
    const myLocTicket = await Ticket.findById(thisTicketId);

      if (!myLocTicket) {
          // Handle ticket not found
          return res.status(404).send('Ticket not found');
      }

      // Update the category
      myLocTicket.category = newCategory;

      // Save the updated ticket
      await myLocTicket.save();

      // Redirect back to the ticket's page
      res.redirect(`/tickets/${myLocTicket._id}`);
  } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
  }
}

async function updateTicketStatus(req, res) {
  try {
    const thisTicketId = req.params.id;
    const newStatus = req.body.status;

    // Find the ticket by ID
    const myLocTicket = await Ticket.findById(thisTicketId);
    const changer = await User.findById(req.body.userID);

    if (!myLocTicket) {
      console.error('Ticket not found'); // Log the error
      return res.status(404).send('Ticket not found');
    }

      // Update the status
      myLocTicket.status = newStatus;

      // Update the history with the new status
      myLocTicket.history.push({ status: newStatus, date: Date.now(), userName: changer.name });

      // Save the updated ticket
      await myLocTicket.save();

      // Redirect back to the ticket's page
      res.redirect(`/tickets/${myLocTicket._id}`);
  } catch (err) {
      console.error(err); // Log the error
      res.status(500).send('Internal Server Error');
    }
  }

module.exports = {
  ticketsIndex,
  showNewTicketPage,
  createTicket,
  showTicket,
  updateTicketCategory,
  updateTicketStatus,
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
