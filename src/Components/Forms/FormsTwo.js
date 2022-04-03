import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

function FormsTwo() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Box
        sx={{
          maxWidth: "468px",
          margin: "0 auto",
          "@media(max-width:575px)": { padding: "20px" },
        }}
      >
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
          <Box
            sx={{
              marginTop: "50px",
              display: "flex",
              alignItems: "start",
            }}
          >
            <Checkbox color="secondary" {...label} />
            <label
              for="policy"
              style={{
                fontSize: "16px",

                marginLeft: "8px",
              }}
            >
              I have read and agree to the
              <a href="#" style={{ color: "#780068" }}>
                {" "}
                privacy policy statements{" "}
              </a>
              and agree to receive marketing emails from MARS.
            </label>
          </Box>
          <Box
            sx={{ marginTop: "32px", display: "flex", alignItems: "center" }}
          >
            <Checkbox color="secondary" {...label} />
            <lavel
              for="T&Cs"
              style={{
                fontSize: "16px",
                marginLeft: "8px",
              }}
            >
              I have read and agree to the
              <a href="#" style={{ color: "#780068" }}>
                {" "}
                T&Cs{" "}
              </a>{" "}
              from MARS.
            </lavel>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "50px",
              "@media(max-width:575px)": {
                display: "flex",
                flexDirection: "column-reverse",
              },
            }}
          >
            <Button
              sx={{
                color: "#780068",
                border: "1px solid #780068",
                borderRadius: "30px",
                padding: "8px 30px",
                fontWeight: "500",
                "@media(max-width:575px)": { width: "100%", marginTop: "10px" },
              }}
            >
              Back
            </Button>
            <Link to="/FromSubmit">
              <Button
                sx={{
                  background: "#FFB800 !important",
                  color: "#780068",
                  border: "1px solid #FFB800",
                  borderRadius: "30px",
                  padding: "8px 30px",
                  fontWeight: "500",
                  "@media(max-width:575px)": {
                    width: "100%",
                  },
                }}
              >
                Put my best PURR forward
              </Button>
            </Link>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "50px",
              color: "#780068",
              fontSize: "12px",
            }}
          >
            Disclaimer: By submitting this form I confirm that I’m 14 or over.
          </Typography>
        </form>
      </Box>
    </>
  );
}

export default FormsTwo;
