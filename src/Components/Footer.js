import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Box sx={{ background: "#797979", marginTop: "100px" }}>
        <Box className="container">
          <Box className="row py-4" style={{ textAlign: "center" }}>
            <Box className="col-md-6">
              <h3 style={{ color: "#fff", marginBottom: "30px" }}>
                WHISKAS&#174;
              </h3>
              <ul>
                <li>
                  <a className="nav-link1" href="">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="nav-link1" href="">
                    Site Owner
                  </a>
                </li>
                <li>
                  <a className="nav-link1" href="">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="nav-link1" href="">
                    What's New
                  </a>
                </li>
                <li>
                  <a className="nav-link1" href="">
                    Cat Breeds
                  </a>
                </li>
              </ul>
            </Box>
            <Box className="col-md-6">
              <h3 style={{ color: "#fff", marginBottom: "30px" }}>
                Our Products
              </h3>
              <ul>
                <li>
                  <a className="nav-link1" href="">
                    Kitten
                  </a>
                </li>
                <li>
                  <a className="nav-link1" href="">
                    Adult
                  </a>
                </li>
                <li>
                  <a className="nav-link1" href="">
                    Senior
                  </a>
                </li>
                <li>
                  <a className="nav-link1" href="">
                    Milk Plus
                  </a>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* another section */}

      <Box sx={{ background: "#770067" }}>
        <Box className="container py-3">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              "@media(max-width:575px)": { flexDirection: "column-reverse" },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                marginBottom: "0",
                fontSize: "14px",
                textAlign: "center",
                "@media(max-width:575px)": { fontSize: "10px" },
              }}
            >
              Whiskas and the Colour Purple are Trademarks of Mars, <br />{" "}
              Incorporated and its affiliates Mars, Incorporated, 2015 All
              rights reserved
            </Typography>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "0",
              }}
            >
              <li>
                <a className="nav-link2" href="">
                  Privacy
                </a>
              </li>
              <li>
                <a className="nav-link2" href="">
                  Cookies
                </a>
              </li>
              <li>
                <a className="nav-link2" href="">
                  Legal
                </a>
              </li>
              <li>
                <a className="nav-link2" href="">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="nav-link2" href="">
                  Our Promise
                </a>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
