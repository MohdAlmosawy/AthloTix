//file : models/ticket.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
    },
  // add the 3 new properties below
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});


  const ticketScheme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    category: {
      type: String,
      enum: ['Inquiry', 'Request', 'Issue']
    },
    status: {
      type: String,
      enum: ["Open", "In Review", "Action Needed", "Completed", "Rejected"],
      default: "Open"
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    history: [{
      status: {
        type: String,
        enum: ["Open", "In Review", "Action Needed", "Completed", "Rejected"]
      },
      date: {
        type: Date,
        default: Date.now
      },
      userName: String,
    }],
    comments: [commentSchema],
    
  // add the 3 new properties below
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketScheme);