import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, MockmanAPI } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockmanAPI />} />
      </Routes>
    </>
  );
}

export default App;
