// backend/models/FormData.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  totalSpend: {
    type: Number,
    required: true
  },
  visiting: {
    type: String,
    required: true
  },
  lastVisiting: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('userData', userSchema);
