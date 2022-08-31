import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

// pages
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProduct";
import InfoOrder from "./pages/InfoOrder";
import Checkout from "./pages/Checkout";
import AddProuct from "./pages/Admin/AddProuct";
import ListProduct from "./pages/Admin/ListProduct";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detailProduct/:id" element={<DetailProduct />} />
        <Route path="/infoOrder" element={<InfoOrder />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/addProduct" element={<AddProuct />} />
        <Route path="/admin/listProduct" element={<ListProduct />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
