import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function FromSubmit() {
  return (
    <>
      <Header />
      <div className="container">
        <Box
          sx={{
            marginTop: "100px",
            paddingBottom: "50px",
            textAlign: "center",
          }}
        >
          <img src="./img/cat.png" alt="" />
          <Typography
            sx={{
              color: "#780068",
              fontSize: "60px",
              fontWeight: "400",
              marginTop: "50px",
            }}
          >
            Your Purr has been delivered!
          </Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>
            Thanks for participating in Purr More with WHISKAS®. <br /> We’ll be
            in touch with you when we announce the winner! <br /> Good luck!
          </Typography>
          <Box sx={{ marginTop: "50px" }}>
            <Button
              sx={{
                background: "#FFB800",
                color: "#780068",
                padding: "8px 30px",
                border: "1px solid #FFB800",
                borderRadius: "30px",
                fontWeight: "500",
              }}
            >
              Back to Purr More page
            </Button>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default FromSubmit;
