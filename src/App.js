import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

// pages
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailProduct/:id" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
