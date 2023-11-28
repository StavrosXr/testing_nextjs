// components/MoviesPage.js
import React from "react";
import { Box, InputBase, Typography } from "@mui/material";

const MoviesPage = () => {
  // Dummy data for movie posters (replace this with your actual data)
  const moviePosters = [
    "https://xl.movieposterdb.com/23_07/2023/10545296/xl_the-hunger-games-the-ballad-of-songbirds-and-snakes-movie-poster_af992b69.jpg?v=2023-11-27%2023:11:24",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    "https://xl.movieposterdb.com/23_06/2023/15398776/xl_oppenheimer-movie-poster_a83f1cbb.jpg?v=2023-11-27%2023:27:53",
    // Add more poster URLs as needed
  ];

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
      <Typography variant="h4" sx={{ color: "#fff", marginBottom: 4, textAlign: "center" }}>
        Explore NTUAflix Movies
      </Typography>
      <Box sx={{ position: "relative", width: "50%", margin: "0 auto", marginBottom: "20px" }}>
        <InputBase
          placeholder="Search for a movie in the database"
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
      <Box sx={{ display: "grid",padding: "2% ", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "30px" }}>
        {moviePosters.map((poster, index) => (
          <img key={index} src={poster} alt={`Movie Poster ${index}`} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
        ))}
      </Box>
    </Box>
  );
};

export default MoviesPage;
