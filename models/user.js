const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

//OAuth user schema
  
  const userSchema = new Schema({
    email: {
      type: String,
    },
    type: {
      type: String,
      enum: ['athlete', 'manager']
    },
    sport: {
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    DOB: {
        type: Date
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    bodySize: {
        type: String,
        enum: ['XS','S','M', 'L', 'XL']
    },
    footSize: {
        type: Number,
    },
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  }, {
    
  }, {
    timestamps: true
  });

  // formmat the DOB dd/mm/yyyy
  userSchema.virtual('formattedDOB').get(function() {
    const date = this.DOB.getDate().toString().padStart(2, '0');
    const month = (this.DOB.getMonth() + 1).toString().padStart(2, '0');
    const year = this.DOB.getFullYear().toString();
    return `${date}/${month}/${year}`;
  });
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('User', userSchema);