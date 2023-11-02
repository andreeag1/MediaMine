const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  videoUrl: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("videos", dataSchema);
