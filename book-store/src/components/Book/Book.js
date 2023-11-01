// Importing necessary modules and components
import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

// Functional component for displaying book details
const Book = (props) => {
  // Accessing the navigation object using useNavigate hook
  const history = useNavigate();

  // Destructuring book details from props
  const { _id, name, author, description, price, image } = props.book;

  // Asynchronous function to handle book deletion
  const deleteHandler = async () => {
    try {
      // Sending a DELETE request to the server for the specified book ID
      await axios.delete(`http://localhost:5000/books/${_id}`);

      // Navigating to the home page after deletion
      history("/");
      // Navigating to the books page to refresh the book list
      history("/books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Rendering the book details in a card-like layout
  return (
    <div className="card">
      {/* Displaying the book image */}
      <img src={image} alt={name} />
      {/* Displaying the author's name */}
      <article>By {author}</article>
      {/* Displaying the book title */}
      <h3>{name}</h3>
      {/* Displaying the book description */}
      <p>{description}</p>
      {/* Displaying the book price */}
      <h3>EUR {price}</h3>
      
      {/* Button for updating the book details */}
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      
      {/* Button for deleting the book */}
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

// Exporting the Book component for use in other parts of the application
export default Book;
