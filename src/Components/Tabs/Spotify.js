import React from "react";
import { Box, Stack } from "@mui/material";

function Spotify() {
  return (
    <>
      <Box
        className="container"
        sx={{
          height: "593px",
          background:
            "linear-gradient(180deg, #90007E 0%, rgba(144, 0, 126, 0.1) 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          "@media(max-width:575px)": { height: "258px" },
        }}
      >
        <iframe
          className="frame2"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/60bX1LGGHKsF4WX65NjI9m?utm_source=generator"
          width="100%"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </Box>
    </>
  );
}

export default Spotify;
