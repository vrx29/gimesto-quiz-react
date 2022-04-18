import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, MockmanAPI, Quiz, Result, Rules } from "./pages";
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
        <Route path="/rules/:quizId" element={<Rules />} />
        <Route path="/quiz/:quizId/:quesNo" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/mockman" element={<MockmanAPI />} />
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
