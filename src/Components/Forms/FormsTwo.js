import React from "react";
import { Box, Typography } from "@mui/material";

function FormsTwo() {
  return (
    <>
      <Box sx={{ maxWidth: "468px", margin: "0 auto" }}>
        <form action="">
          <Typography
            sx={{ fontSize: "24px", fontWeight: "800", marginTop: "50px" }}
          >
            About You
          </Typography>
          <div className="row">
            <div className="col-md-6">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#780068",
                  marginTop: "35px",
                }}
              >
                First Name *
              </Typography>
              <input
                style={{
                  margin: "10px 10px 10px 0",
                  outline: "none",
                  padding: "5px",
                  borderRadius: "4px",
                  border: "1px solid #767676",
                }}
                type="text"
                required
              />
            </div>
            <div className="col-md-6">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#780068",
                  marginTop: "35px",
                }}
              >
                Last Name *
              </Typography>
              <input
                style={{
                  margin: "10px 10px 10px 0",
                  outline: "none",
                  padding: "5px",
                  borderRadius: "4px",
                  border: "1px solid #767676",
                }}
                type="text"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#780068",
                  marginTop: "35px",
                }}
              >
                Email Address *
              </Typography>
              <input
                style={{
                  margin: "10px 10px 10px 0",
                  outline: "none",
                  padding: "5px",
                  borderRadius: "4px",
                  border: "1px solid #767676",
                }}
                type="email"
                required
              />
            </div>
            <div className="col-md-6">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#780068",
                  marginTop: "35px",
                }}
              >
                Phone Number *
              </Typography>
              <input
                style={{
                  margin: "10px 10px 10px 0",
                  outline: "none",
                  padding: "5px",
                  borderRadius: "4px",
                  border: "1px solid #767676",
                }}
                type="nnumber"
                required
              />
            </div>
          </div>
          <Box sx={{ marginTop: "50px" }}>
            <input type="checkbox" name="policy" id="policy" />{" "}
            <label
              for="policy"
              style={{
                fontSize: "16px",
                display: "inline-table",
                marginLeft: "8px",
              }}
            >
              I have read and agree to the
              <span style={{ color: "#780068" }}>
                {" "}
                privacy policy statements{" "}
              </span>
              and <br /> agree to receive marketing emails from MARS.
            </label>
          </Box>
          <Box sx={{ marginTop: "32px" }}>
            <input type="checkbox" name="T&Cs" id="T&Cs" />{" "}
            <lavel
              for="T&Cs"
              style={{
                fontSize: "16px",
                display: "inline-table",
                marginLeft: "8px",
              }}
            >
              I have read and agree to the
              <span style={{ color: "#780068" }}> T&Cs </span> from MARS.
            </lavel>
          </Box>
          <button>get data</button>
        </form>
      </Box>
    </>
  );
}

export default FormsTwo;
