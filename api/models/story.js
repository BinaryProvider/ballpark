const mongoose = require('mongoose');
const nanoid = require('nanoid');

const storySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(5)
  },
  description: String,
  creator: String
});

module.exports = mongoose.model('Story', storySchema);
