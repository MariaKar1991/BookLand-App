// Loading environment variables from a .env file
require("dotenv").config();

// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

// Creating an instance of the express application
const app = express();

// Middlewares
// Parsing incoming JSON requests
app.use(express.json());

// Enabling Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Using the book routes for URLs starting with '/books'
app.use("/books", router); // localhost:5000/books

// Connecting to MongoDB using the provided URL in the environment variables
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected To Database"))
  .then(() => {
    // Starting the server on port 5000 after successful database connection
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));
