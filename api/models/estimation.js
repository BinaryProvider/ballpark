const mongoose = require('mongoose');

const estimationSchema = new mongoose.Schema({
  story: String,
  point: Number,
  user: String
});

module.exports = mongoose.model('Vote', estimationSchema);
