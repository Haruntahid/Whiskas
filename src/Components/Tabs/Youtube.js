import { Box } from "@mui/material";
import React from "react";

function Youtube() {
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
          "@media(max-width:575px)": { height: "258px" },
        }}
      >
        <iframe
          className="frame"
          width="100%"
          src="https://www.youtube.com/embed/R5O5lLIph9Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </>
  );
}

export default Youtube;
