import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mt="120px">
        <Typography sx={{ fontFamily: "poppins" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "poppins" }} variant="h3">
          By Maria Karavazaki
        </Typography>
      </Box>
    </div>
  );
};

export default About;
