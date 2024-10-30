const express = require('express');
const Comic = require('./comicModel');
const router = express.Router();

// Create a comic book
router.post('/', async (req, res) => {
  try {
    const comic = new Comic(req.body);
    await comic.save();
    res.status(201).json(comic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all comics
router.get('/', async (req, res) => {
  try {
    const comics = await Comic.find();
    res.status(200).json(comics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a comic by ID
router.get('/:id', async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) return res.status(404).json({ message: 'Comic not found' });
    res.status(200).json(comic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a comic
router.put('/:id', async (req, res) => {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comic) return res.status(404).json({ message: 'Comic not found' });
    res.status(200).json(comic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a comic
router.delete('/:id', async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    if (!comic) return res.status(404).json({ message: 'Comic not found' });
    res.status(200).json({ message: 'Comic deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
