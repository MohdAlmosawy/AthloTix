const User = require("../models/user");
const Ticket = require("../models/ticket");

module.exports = {
  index: indexUser,
  new: newUser,
  create: create,
  show,
};

async function indexUser(req, res) {
  const users = await User.find({});
  res.render("users/index", { users });
}

async function show(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const tickets = await Ticket.find({ user: user._id });
    res.render("users/show", { title: "User Detail", user, tickets });
  } catch (err) {
    console.log(err);
    res.redirect("/users/index");
  }
}

function newUser(req, res) {
  res.render("users/new", { errorMsg: "" });
}

async function create(req, res) {
  // console.log(`req.body ===> ${JSON.stringify(req.body)}`);
  if (req.body)
    try {
      await User.create(req.body);

      res.redirect("/users/index");
    } catch (err) {
      console.log(err);
      res.render("users/new", { errorMsg: err.message });
    }
}
