// Importing the express library to create a router
const express = require("express");

// Creating a router instance
const router = express.Router();

// Importing the Book model and booksController
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

// Route to get all books
router.get("/", booksController.getAllBooks);

// Route to add a new book
router.post("/", booksController.addBook);

// Route to get a book by its ID
router.get("/:id", booksController.getById);

// Route to update a book by its ID
router.put("/:id", booksController.updateBook);

// Route to delete a book by its ID
router.delete("/:id", booksController.deleteBook);

// Exporting the router for use in other parts of the application
module.exports = router;
