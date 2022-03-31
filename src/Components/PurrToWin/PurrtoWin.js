import React from "react";
import { Box, Typography } from "@mui/material";

function PurrtoWin() {
  return (
    <>
      <section className="PurrtoWin" style={{ marginTop: "80px" }}>
        <Box className="container">
          <Box
            sx={{
              background: "url(./img/emojibg.png)",
              height: "194px",
              width: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "72px",
                fontWeight: "900",
                color: "#fff",
                "@media(max-width:575px)": { fontSize: "40px" },
              }}
            >
              PURR to{" "}
              <span style={{ color: "#FFB800", fontWeight: "900" }}>Win</span>!
            </Typography>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default PurrtoWin;
