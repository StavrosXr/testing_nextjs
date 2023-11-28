import React from "react";
import { Box, InputBase, Typography } from "@mui/material";

const MainPage = () => {
  return (
    <Box sx={{ backgroundColor: "#000", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Typography variant="h4" sx={{ color: "#fff", marginBottom: 4, textAlign: "center" }}>
        Search the NTUAflix movie database!
      </Typography>
      <Box sx={{ position: "relative", width: "50%" }}>
        <InputBase
          placeholder="Search for a movie or actor"
          sx={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#333",
            border: "3px solid #555",
            borderRadius: "16px",
            color: "#fff",
            transition: "border-color 0.3s",
            "&:hover": {
              borderColor: "#16abff",
            },
          }}
        />
        <Box sx={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", color: "#fff" }}>
          <label>
            <input type="radio" name="searchType" value="movie" /> Movie
          </label>
          <label>
            <input type="radio" name="searchType" value="actor" /> Actor
          </label>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
