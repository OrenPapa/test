import React from "react";
import Navbar from "../Components/Navbar";
import ProductsGrid from "../Components/ProductsGrid";

function Homepage() {

  return (
    <div className="homepage">
      <Navbar />
      <ProductsGrid/>
    </div>
  );
}

export default Homepage;
