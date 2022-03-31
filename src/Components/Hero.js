import React from "react";
import { Box, Typography } from "@mui/material";

function Hero() {
  return (
    <>
      <Box className="container">
        <Typography
          sx={{
            fontSize: "60px",
            color: "#780068",
            textAlign: "center",
            fontWeight: "400",
            fontFamily: "avenir",
            "@media(max-width:767px)": { fontSize: "46px" },
          }}
        >
          Love the Purr, Feel the Purr, <br /> Feed their Purr.
        </Typography>
        <Typography
          sx={{
            fontFamily: "avenir",
            fontSize: "24px",
            color: "#494949",
            textAlign: "center",
            fontWeight: "400",
            marginTop: "24px",
            "@media(max-width:767px)": { fontSize: "17px" },
          }}
        >
          Here at WHISKAS® we want to create a world where all cats Purr More.{" "}
          <br /> Play our Purr More videos and spotify playlist to bring out the
          Purr in your feline!
        </Typography>
      </Box>
    </>
  );
}

export default Hero;
