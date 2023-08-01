const Ticket = require("../models/ticket");
const User = require("../models/user");

async function ticketsIndex(req, res) {
  const AllTickets = await Ticket.find({});
  res.render('tickets/index', { title: 'All Tickets', AllTickets });
}

module.exports = {
  ticketsIndex
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
