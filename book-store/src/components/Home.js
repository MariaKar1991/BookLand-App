import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#0073e6", marginTop: "120px", fontSize: "45px" }}>
        Welcome to BookLand
      </h1>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 10, background: "blue" }}
          variant="contained"
        >
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
