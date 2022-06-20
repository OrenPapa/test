import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import EditProfilePage from "../Pages/EditProfilePage";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import ProductPage from "../Pages/ProductPage";
import RegisterPage from "../Pages/RegisterPage";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
