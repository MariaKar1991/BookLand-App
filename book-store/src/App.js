// Importing necessary modules and components from React and React Router
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";

// Main component for the application structure
function App() {
  // Rendering the application layout with header and routes
  return (
    <React.Fragment>
      {/* Header component for the application */}
      <header>
        <Header />
      </header>

      {/* Main content area with React Router routes */}
      <main>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} exact />
          
          {/* Route for adding a new book */}
          <Route path="/add" element={<AddBook />} exact />
          
          {/* Route for displaying the list of books */}
          <Route path="/books" element={<Books />} exact />
          
          {/* Route for displaying information about the application */}
          <Route path="/about" element={<About />} exact />
          
          {/* Route for displaying details of a specific book */}
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

// Exporting the App component for use in other parts of the application
export default App;

