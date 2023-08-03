// file : controller/comments.js
const Ticket = require('../models/ticket');
const User = require('../models/user');

module.exports = {
    createNewComment,
  };

async function createNewComment(req, res){
    // Get the Ticket id from the request
    let id = req.params.id;
    // Get the comment content from the form data
    const commentContent = req.body.textarea;
    // Get the ticket
    const localTicket = await Ticket.findById(id);
    const commenter = await User.findById(req.body.userID);

    // Create a new comment object
    const newComment = {
        content: commentContent,
        user: commenter._id,
        userName: commenter.name,
        userAvatar: commenter.avatar,
    };

    // Add the comment to the ticket
    localTicket.comments.push(newComment);

    // Save the ticket
    try{
        await localTicket.save();
        res.redirect(`/tickets/${localTicket._id}`);
    } catch(err){
        console.error(err);
        res.status(500).send('Error adding comment to ticket.');
    }
}