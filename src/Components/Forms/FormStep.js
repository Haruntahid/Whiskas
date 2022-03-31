import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import FormsOne from "./FormsOne";
import FormsTwo from "./FormsTwo";
import PurrtoWin from "../PurrToWin/PurrtoWin";
import Forms from "./Forms";

function FormStep() {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return <FormsOne />;
    } else if (page === 1) {
      return <FormsTwo />;
    }
  };

  return (
    <>
      <div className="header">
        <PurrtoWin />
        <Forms />
      </div>
      <div className="body">{pageDisplay()}</div>
      <div className="footer">
        <Box
          sx={{
            maxWidth: "468px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Put my best PURR forward
          </Button>
        </Box>
      </div>
    </>
  );
}

export default FormStep;
