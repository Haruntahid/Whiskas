import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

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
                {/* <Button onClick={handleSubmission}>PREVIEW</Button> */}
            </Box>
        </>
    );
}

export default FormsOne;
