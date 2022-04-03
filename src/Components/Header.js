import React from "react";
import { Box, IconButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <>
      <Box
        className="py-2"
        sx={{
          textAlign: "center",
          background: "url(../img/headerbg.png)",
        }}
      >
        <img src="../img/logo.png" alt="" />

        <Box
          sx={{
            position: "absolute",
            top: "0",
            right: "20px",
            "@media(max-width:767px)": { display: "none" },
          }}
        >
          <IconButton>
            <FacebookRoundedIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>

          <a style={{ color: "#FFB800" }} href="#">
            Country <KeyboardArrowDownIcon />
          </a>
        </Box>
      </Box>

      <Box
        className="navbar navbar-expand-lg navbar-light"
        sx={{
          background: "#780068",
          "@media(max-width:991px)": {
            background: "none",
          },
        }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon sx={{ color: "#780068" }} />
          </button>
          <div
            className="collapse navbar-collapse nav_res"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Breeds
                </a>
              </li>
              <li className="nav-item">
                <a style={{ color: "#FFB800" }} className="nav-link" href="#">
                  COVID-19
                </a>
              </li>
              <li className="nav-item">
                <a style={{ color: "#FFB800" }} className="nav-link" href="#">
                  Purr More
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Header;
