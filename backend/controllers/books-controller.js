// Importing the Book model from the specified location
const Book = require("../model/Book");

// Function to get all books from the database
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    // Fetch all books from the database
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  // Check if books were found
  if (!books) {
    return res.status(404).json({ message: "No products found" });
  }
  // Respond with the found books
  return res.status(200).json({ books });
};

// Function to get a book by its ID from the database
const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    // Find a book by its ID
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  // Check if the book was found
  if (!book) {
    return res.status(404).json({ message: "No products found" });
  }
  // Respond with the found book
  return res.status(200).json({ book });
};

// Function to add a new book to the database
const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    // Create a new Book instance with the provided data and save it
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  // Check if the book was successfully added
  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  // Respond with the added book
  return res.status(201).json({ book });
};

// Function to update a book in the database by its ID
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    // Find a book by its ID, update its fields, and save it
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  // Check if the book was found and updated
  if (!book) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  // Respond with the updated book
  return res.status(200).json({ book });
};

// Function to delete a book from the database by its ID
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    // Find a book by its ID and remove it from the database
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  // Check if the book was found and deleted
  if (!book) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  // Respond with a success message
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

// Exporting the functions to be used in other parts of the application
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
