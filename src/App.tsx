import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, MockmanAPI } from "./pages";
import { Footer, Navbar } from "./components";
import "./App.css";
import { useTheme } from "./context";

function App() {
  const { theme } = useTheme();
  return (
    <main className={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockmanAPI />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
