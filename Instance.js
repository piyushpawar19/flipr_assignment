

const mongoose = require('mongoose');

const instanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  port: {
    type: Number,
    required: true
  },
  databases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Database'
    }
  ]
});

module.exports = mongoose.model('Instance', instanceSchema);
