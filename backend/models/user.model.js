const mongoose = require('mongoose')

// using mongoose schema
const Schema = mongoose.Schema

// user schema, with single field username with validations
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema)

// exporting the user
module.exports = User