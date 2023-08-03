const User = require("../models/user");
const Ticket = require("../models/ticket");

module.exports = {
  index: indexUser,
  new: newUser,
  create: create,
  show,
  delete: deleteUser,
  edit: editUser,
  update,
};
//get all users users/index
async function indexUser(req, res) {
  // const users = await User.find({});
  // res.render("users/index", { users });
  const user = await User.findById(req.user._id);
  let users = user.type === 'manager' ? await User.find({}) : res.redirect("../tickets");
  res.render("users/index", { users });
}
//get one user users/show
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
//render new user users/new 
 async function newUser(req, res) {
  const user = await User.findById(req.user._id);
  let users = user.type === 'manager' ? res.render("users/new") : res.redirect("../tickets");
}

//create new user 
async function create(req, res) {
  if (req.body)
    try {
      await User.create(req.body);

      res.redirect("/users/index");
    } catch (err) {
      console.log(err);
      res.render("users/new", { errorMsg: err.message });
    }
}

//delete user
async function deleteUser(req, res) {
  try {
    //use findAndDelete() 
     await User.findByIdAndDelete(req.query.id);
    res.redirect("/users/index");
    // const userId = req.params.id;
    //instead of ... remove()
    // await user.remove();
  } catch (err) {
    console.log(err);
    res.redirect("/users/index");
  }
}

//render edit user users/edit
async function editUser(req, res) {
  const user = await User.findById(req.params.id);
  const userId= req.params.id;
    res.render(`users/edit`, { user, errorMsg: "" });

}

//update user 
async function update(req, res) {
  const userId = req.params.id;
    try {
      //instead of... update() ..
      //await User.update(userId, req.body);
      //use findOneAndUpdate()
      await User.findOneAndUpdate({_id: userId}, req.body);
      res.redirect("/users/index");

    } catch (err) {
      console.log(err);
      res.render("users/edit", { errorMsg: err.message });
    }
}
