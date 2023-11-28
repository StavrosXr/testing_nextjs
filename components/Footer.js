import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box sx={{ py: 4, textAlign: "center",padding: "2rem 2rem 2rem 2rem" , bgcolor: "#424242", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant="body2" sx={{ color: "white", mr: 2,'&:hover': {
      color: '#16abff',
    },}}>
        Your Footer Text Here
      </Typography>
      <IconButton
        aria-label="github"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener"
        sx={{ color: "white" }}
      >
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
