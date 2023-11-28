// components/ActorsPage.js
import React from "react";
import { Box, InputBase, Typography } from "@mui/material";

const actorData = [
  { name: "SBHSA", photo: "https://www.pentapostagma.gr/sites/default/files/styles/main/public/2021-08/image-77.png?itok=_4JiB9ue" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" },
  { name: "Actor Name", photo: "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg" }
  // Add more actor data as needed
];

const ActorsPage = () => {
  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
      <Typography variant="h4" sx={{ color: "#fff", marginBottom: 4, textAlign: "center" }}>
        Explore NTUAflix Actors
      </Typography>
      <Box sx={{ position: "relative", width: "50%", margin: "0 auto", marginBottom: "20px" }}>
        <InputBase
          placeholder="Search for an actor in the database"
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
            <input type="radio" name="searchType" value="actor" /> Actor
          </label>
          <label>
            <input type="radio" name="searchType" value="movie" /> Movie
          </label>
        </Box>
      </Box>
      <Box sx={{ display: "grid", padding: "2%", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "30px" }}>
        {actorData.map((actor, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <img src={actor.photo} alt={`Actor Photo ${index}`} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            <Typography variant="body1" sx={{ fontFamily: "Roboto", marginTop: "8px", color: "#fff" }}>
              {actor.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ActorsPage;
