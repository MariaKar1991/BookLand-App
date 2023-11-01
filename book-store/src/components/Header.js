// Importing necessary modules and components from Material-UI, React, and MUI icons
import React from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Functional component for the application header
const Header = () => {
  // State for managing the active tab
  const [value, setValue] = useState();

  // Rendering the application header with navigation tabs
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F9D" }} position="sticky">
        <Toolbar>
          {/* Home icon with a link to the home page */}
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>

          {/* Navigation tabs for different sections of the application */}
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            {/* Tab for adding a new book */}
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            
            {/* Tab for displaying the list of books */}
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            
            {/* Tab for displaying information about the application */}
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// Exporting the Header component for use in other parts of the application
export default Header;
