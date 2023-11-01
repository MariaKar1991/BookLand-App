// Importing necessary modules and components from React and Axios
import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";

// Constant for the API URL
const URL = "http://localhost:5000/books";

// Asynchronous function to fetch books from the server
const fetchHandler = async () => {
  // Sending a GET request to the server to fetch books
  return await axios.get(URL).then((res) => res.data);
};

// Functional component for displaying a list of books
const Books = () => {
  // State for storing the list of books
  const [books, setBooks] = useState();

  // Effect hook to fetch books when the component mounts
  useEffect(() => {
    // Calling the fetchHandler function to fetch books and update the state
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  // Logging the fetched books to the console
  console.log(books);

  // Rendering the list of books using the Book component
  return (
    <div>
      <ul>
        {/* Mapping through the list of books and rendering Book component for each */}
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

// Exporting the Books component for use in other parts of the application
export default Books;
