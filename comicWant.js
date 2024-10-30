const mongoose = require('mongoose');//Calls the mongoDB to the program

const comicS = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  pages: { type: Number, required: true },
  condition: { type: String, enum: ['new', 'used'], required: true },
});
//Defines the content nessary for book.
module.exports = mongoose.model('Comic', comicS,'Comics');
