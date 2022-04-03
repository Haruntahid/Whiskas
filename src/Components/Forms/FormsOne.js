import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

function Myinput(cats) {
  let i;

  switch (cats) {
    case "1":
      return (
        <Box
          sx={{
            maxWidth: "468px",
            margin: "0 auto",
          }}
        >
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
              borderRadius: "4px",
              border: "1px solid #767676",
            }}
            type="text"
          />
        </Box>
      );
    case "2":
      return (
        <Box
          sx={{
            maxWidth: "468px",
            margin: "0 auto",
          }}
        >
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
              borderRadius: "4px",
              border: "1px solid #767676",
            }}
            type="text"
          />
          <input
            style={{
              margin: "10px 10px 10px 0",
              outline: "none",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #767676",
            }}
            type="text"
          />
        </Box>
      );
    case "3":
      return (
        <>
          <Box
            sx={{
              maxWidth: "468px",
              margin: "0 auto",
              "@media(max-width:575px)": { padding: "20px" },
            }}
          >
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
                borderRadius: "4px",
                border: "1px solid #767676",
              }}
              type="text"
            />
            <input
              style={{
                margin: "10px 10px 10px 0",
                outline: "none",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #767676",
              }}
              type="text"
            />
            <input
              style={{
                margin: "10px 10px 10px 0",
                outline: "none",
                padding: "5px",
                borderRadius: "4px",
                border: "1px solid #767676",
              }}
              type="text"
            />
          </Box>
        </>
      );
    default:
      return "";
  }
}

function FormsOne(props) {
  const Input = styled("input")({
    display: "none",
  });

  const [selectedFile, setSelectedFile] = useState("No file selected.");
  // const [fileName, setFileName] = useState(selectedFile);
  // useEffect(() => {
  //     let fileName = selectedFile[0].name;
  // });

  // const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0].name);

    // setIsFilePicked(true);
  };
  const [catNumber, setCatNumber] = React.useState("");

  const handleChange = (event) => {
    setCatNumber(event.target.value);
  };

  const [ok, setOk] = useState();
  const handleSubmission = () => {
    if (selectedFile == "No file selected." || catNumber == "") {
      setOk("nope");
    } else {
      setOk();
      props.addTrip();
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "468px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "800",
            marginTop: "50px",
          }}
        >
          Upload your Purr!
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: `${!ok ? "#780068" : "#FF0000"}`,
            marginTop: "35px",
          }}
        >
          Share your Cat’s purr video or sound file with us! *
        </Typography>
        <Typography sx={{ marginTop: "10px", marginBottom: "15px" }}>
          {" "}
          {selectedFile}
        </Typography>
        <label htmlFor="contained-button-file">
          <Input
            id="contained-button-file"
            multiple
            type="file"
            onChange={changeHandler}
            required
          />
          <Button
            variant="contained"
            component="span"
            sx={{
              background: "#fff !important",
              color: "#780068",
              border: "1px solid #90007E",
              padding: "5px 30px",
              minWidth: "214px",
            }}
          >
            Choose File...
          </Button>
        </label>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "800",
            marginTop: "60px",
          }}
        >
          About Your Cat
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: `${!ok ? "#780068" : "#FF0000"}`,
            marginTop: "35px",
          }}
        >
          How many cat(s) do you live with? *
        </Typography>

        <select
          required
          name=""
          id=""
          value={catNumber}
          style={{
            marginTop: "50px",
            background: "#fff",
            border: "1px solid #767676",
            width: "200px",
            padding: "4px",
            borderRadius: "4px",
          }}
          onChange={handleChange}
        >
          <option value={""}></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        {catNumber ? Myinput(catNumber) : ""}
        <Box>
          {!ok ? (
            ""
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                color: "#ff0000",
                marginTop: "35px ",
                fontSize: "12px",
              }}
            >
              Please complete the required fields!
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            textAlign: "right",
          }}
        >
          {" "}
          <Button
            onClick={handleSubmission}
            type="submit"
            sx={{
              background: "#FFB800 !important",
              color: "#780068",
              borderRadius: "32px",
              padding: "8px 26px",
              fontFamily: "avenir",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default FormsOne;
