const express = require("express");
const Model = require("../models/model");

const router = express.Router();

module.exports = router;

//Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    title: req.body.title,
    videoUrl: req.body.videoUrl,
    imageUrl: req.body.imageUrl,
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
