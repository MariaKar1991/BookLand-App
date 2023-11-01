// Importing necessary modules and components from Material-UI and React
import { Box, Typography } from "@mui/material";
import React from "react";

// Functional component for displaying information about the application
const About = () => {
  // Rendering the about information using Material-UI components
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mt="120px">
        {/* Heading for the application description */}
        <Typography sx={{ fontFamily: "poppins" }} variant="h2">
          This is a CRUD Application
        </Typography>
        
        {/* Subheading with the author's name */}
        <Typography sx={{ fontFamily: "poppins" }} variant="h3">
          By Maria Karavazaki
        </Typography>
      </Box>
    </div>
  );
};

// Exporting the About component for use in other parts of the application
export default About;
