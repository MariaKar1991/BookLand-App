// Importing necessary modules and components from Material-UI and React
import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Functional component for the home page
const Home = () => {
  // Rendering the content of the home page
  return (
    <div style={{ textAlign: "center" }}>
      {/* Heading for the home page */}
      <h1 style={{ color: "#0073e6", marginTop: "120px", fontSize: "45px" }}>
        Welcome to BookLand
      </h1>

      {/* Box container for centering the button */}
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Button with a link to the list of books */}
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 10, background: "blue" }}
          variant="contained"
        >
          {/* Typography component for styling the button text */}
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  );
};

// Exporting the Home component for use in other parts of the application
export default Home;
