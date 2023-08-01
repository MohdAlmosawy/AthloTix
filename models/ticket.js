//file : models/ticket.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
    },
    datePosted: {
      type: Date,
    }
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
      }
    }],
    comments: [commentSchema]
  });

module.exports = mongoose.model('Ticket', ticketScheme);