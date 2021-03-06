import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FormsOne from "./FormsOne";
import FormsTwo from "./FormsTwo";
import FromSubmit from "./FromSubmit";

function Forms() {
  const [page, setPage] = useState(0);
  const formNumber = ["1", "2"];
  const imgFill = ["../img/step1.png", "../img/step2.png"];

  return (
    <>
      <Box className="container">
        <Box
          sx={{
            background: "rgba(92, 0, 80, 0.04)",
            paddingBottom: "100px",
          }}
        >
          <Typography
            sx={{
              color: "#780068",
              fontSize: "16px",
              paddingTop: "40px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            <span style={{ fontWeight: "800" }}>
              Want to share your feline’s purr loud and proud?{" "}
            </span>
            <br /> Simply leave us your details and upload your cat’s best and
            most beautiful purr,
            <br /> and you’ll be in to win 1 month worth free WHISKAS® Wet Food
          </Typography>
          <Box sx={{ textAlign: "center", marginTop: "50px" }}>
            <img src="../img/step1.png" alt="" />
            <img
              style={{ marginLeft: "18px" }}
              src={
                formNumber[page] === "1"
                  ? "../img/step2.png"
                  : "../img/step1.png"
              }
              alt=""
            />

            <p style={{ fontSize: "16px", color: "#780068" }}>
              Step {formNumber[page]} of 2
            </p>
          </Box>
          {formNumber[page] === "1" ? (
            <FormsOne addTrip={() => setPage("1")} />
          ) : (
            ""
          )}
          {formNumber[page] === "2" ? <FormsTwo /> : ""}
        </Box>
      </Box>
    </>
  );
}

export default Forms;
