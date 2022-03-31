import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

function FormsOne() {
  const [input, setInput] = useState("");
  const checkInput = (e) => {
    e.prventDefault();
    console.log(input);
  };
  return (
    <>
      <Box sx={{ maxWidth: "468px", margin: "0 auto" }}>
        <form action="">
          <Typography
            sx={{ fontSize: "24px", fontWeight: "800", marginTop: "50px" }}
          >
            Upload your Purr!
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#780068",
              marginTop: "35px",
            }}
          >
            Share your Cat’s purr video or sound file with us! *
          </Typography>
          <input
            style={{ marginTop: "50px" }}
            className="custom_file_input"
            type="file"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Typography
            sx={{ fontSize: "24px", fontWeight: "800", marginTop: "60px" }}
          >
            About Your Cat
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#780068",
              marginTop: "35px",
            }}
          >
            How many cat(s) do you live with? *
          </Typography>
          <select name="" id="" style={{ marginTop: "50px" }} required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#780068",
              marginTop: "35px",
            }}
          >
            What are their names? *
          </Typography>
          <input
            style={{
              margin: "10px 10px 10px 0",
              outline: "none",
              padding: "5px",
            }}
            type="text"
          />
          <input
            style={{
              margin: "10px 10px 10px 0",
              outline: "none",
              padding: "5px",
            }}
            type="text"
          />{" "}
          <br />
          <input
            style={{
              margin: "10px 10px 10px 0",
              outline: "none",
              padding: "5px",
            }}
            type="text"
          />
          <Button onClick={checkInput} type="submit">
            PREVIEW
          </Button>
        </form>
      </Box>
    </>
  );
}

export default FormsOne;
