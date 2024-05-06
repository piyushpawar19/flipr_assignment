// User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'editor', 'reader'],
    default: 'reader'
  },
  databases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Database'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
