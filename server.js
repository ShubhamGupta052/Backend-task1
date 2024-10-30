const express = require('express');
const mongoose = require('mongoose');
const comicWays = require('./comicWays'); 
// Import routes

const app = express(); // Initialize Express app
const PORT = 3000; // Define the server port

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/Comix-store'; 
// Connection string

mongoose.connect(dbURI)
  .then(() => 
    console.log('MongoDB connected successfully'))
  .catch((err) => 
    console.error('MongoDB connection error:', err));

// Middleware to parse JSONr
app.use(express.json());

// API Routes
app.use('/api/comics', comicWays);

// Start the server
app.listen(PORT, () => 
  console.log(`Server is running on http://localhost:${PORT}`));
