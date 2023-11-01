// Importing the mongoose library for MongoDB schema creation
const mongoose = require("mongoose");

// Creating a mongoose schema for the 'Book' model
const Schema = mongoose.Schema;

// Defining the structure of the 'Book' schema
const bookSchema = new Schema({
  // Field for the name of the book, must be a string and is required
  name: {
    type: String,
    required: true,
  },
  // Field for the author of the book, must be a string and is required
  author: {
    type: String,
    required: true,
  },
  // Field for the description of the book, must be a string and is required
  description: {
    type: String,
    required: true,
  },
  // Field for the price of the book, must be a number and is required
  price: {
    type: Number,
    required: true,
  },
  // Field for the availability of the book, a boolean value
  available: {
    type: Boolean,
  },
  // Field for the image URL of the book, must be a string and is required
  image: {
    type: String,
    required: true,
  },
});

// Exporting the mongoose model for the 'Book' schema
module.exports = mongoose.model("Book", bookSchema);

// The 'books' collection in the MongoDB database will be based on this schema
// The model is named "Book" and follows the defined structure in the bookSchema
