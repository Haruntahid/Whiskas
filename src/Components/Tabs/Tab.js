import { Stack, Button } from "@mui/material";
import React from "react";
import Spotify from "./Spotify";
import Youtube from "./Youtube";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState } from "react";

function Tab() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="tab" style={{ marginTop: "50px" }}>
        <div className="container">
          <Stack flexDirection={"row"}>
            <Button
              className={toggleState === 1 ? "activated" : "normal"}
              onClick={() => toggleTab(1)}
            >
              <YouTubeIcon fontSize="large" sx={{ marginRight: "5px" }} />
              Watch the Purr
            </Button>
            <Button
              className={toggleState === 2 ? "activated" : "normal"}
              onClick={() => toggleTab(2)}
            >
              <i
                class="fa-brands fa-spotify"
                style={{ fontSize: "28px", marginRight: "5px" }}
              ></i>
              Listen to the Purr
            </Button>
          </Stack>
          <div className={toggleState === 1 ? "active_content" : "content"}>
            <Youtube />
          </div>
          <div className={toggleState === 2 ? "active_content" : "content"}>
            <Spotify />
          </div>
        </div>
      </section>
    </>
  );
}

export default Tab;
