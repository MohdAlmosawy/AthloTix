const Ticket = require("../models/ticket");
const User = require("../models/user");

async function ticketsIndex(req, res) {
  const AllTickets = await Ticket.find({});
  res.render('tickets/index', { title: 'All Tickets', AllTickets });
}

function newTicket(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('tickets/new', { title: 'Create New Ticket', errorMsg: '' });
}

module.exports = {
  ticketsIndex,
  newTicket,
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
