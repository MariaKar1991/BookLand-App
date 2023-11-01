// Importing necessary modules and components from Material-UI and React
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Functional component for displaying and updating book details
const BookDetail = () => {
  // State for storing form inputs and checkbox status
  const [inputs, setInputs] = useState();
  const [checked, setChecked] = useState(false);

  // Accessing the book ID from the route parameters
  const id = useParams().id;

  // Accessing the navigation object using useNavigate hook
  const history = useNavigate();

  // Effect hook to fetch book details when the component mounts
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        // Sending a GET request to the server for the specified book ID
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        // Setting the book details in the state
        setInputs(response.data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchHandler();
  }, [id]);

  // Asynchronous function to send a PUT request to update the book details
  const sendRequest = async () => {
    try {
      // Sending a PUT request to the server for the specified book ID
      await axios.put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      });
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calling the sendRequest function to update the book details
    sendRequest().then(() => history("/books"));
  };

  // Function to handle input changes in the form
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Rendering the form with book details for updating
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            {/* Form fields for updating book details */}
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
            
            {/* Checkbox for indicating book availability */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />

            {/* Button to submit the updated book details */}
            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

// Exporting the BookDetail component for use in other parts of the application
export default BookDetail;

