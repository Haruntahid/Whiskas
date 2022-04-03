import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import FromSubmit from "./Components/Forms/FromSubmit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/FromSubmit" element={<FromSubmit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
