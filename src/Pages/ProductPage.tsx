import React from "react";
import Navbar from "../Components/Navbar";
import ProductCardExpanded from "../Components/ProductCardExpanded";

function ProductPage() {
  return (
    <div className="product-page">
      <Navbar />
      <ProductCardExpanded />
    </div>
  );
}

export default ProductPage;
