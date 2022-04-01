import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Myinput(cats) {
    let i;

    switch (cats) {
        case "1":
            return <input type="text" />;
        case "2":
            return (
                <>
                    <input type="text" />
                    <input type="text" />
                </>
            );
        case "3":
            return (
                <>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </>
            );
        default:
            return "";
    }
}

function FormsOne() {
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

    const handleSubmission = () => {};
    const [catNumber, setCatNumber] = React.useState("");
    const [inputs, setInputs] = useState([<input />]);

    const handleChange = (event) => {
        setCatNumber(event.target.value);
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
                        color: "#780068",
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
                {/* <input
                    style={{ marginTop: "50px" }}
                    className="custom_file_input"
                    type="file"
                    required
                    onChange={(e) => setSelectedFile(e.target.files)}
                /> */}
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
                        color: "#780068",
                        marginTop: "35px",
                    }}
                >
                    How many cat(s) do you live with? *
                </Typography>
                {/* <FormControl
                    sx={{
                        minWidth: "214px",
                        m: 1,
                        height: "45px",
                    }}
                >
                    <InputLabel
                        className="custom"
                        id="demo-simple-select-label"
                    >
                        Number of cats
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Number of cats"
                        onChange={handleChange}
                        sx={{ height: "100%" }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl> */}
                <select
                    name=""
                    id=""
                    value={catNumber}
                    style={{ marginTop: "50px" }}
                    onChange={handleChange}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
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

                {catNumber ? Myinput(catNumber) : ""}

                {/* <Button onClick={handleSubmission}>PREVIEW</Button> */}
            </Box>
        </>
    );
}

export default FormsOne;
