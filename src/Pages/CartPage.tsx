import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { RootState } from "../Redux/Store";
import { Product } from "../Types/Product";

function CartPage() {
  const products: Array<{ Product: Product | undefined; count: number }> =
    useSelector((state: RootState) => state.cartSlice.cartProducts);

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-page__title">My Cart</div>
      <div className="cart-page__products-container">
        {products?.map((product) => {
          return (
            <div key={product.Product?.id} className="cart-page__product">
              <div className="cart-page__product-content">
                <div className="cart-page__product-left-panel">
                  <img
                    className="cart-page__product-image"
                    src={product.Product?.image}
                    alt="product"
                  />
                </div>
                <div className="cart-page__product-right-panel">
                  {product.Product?.title}
                  <div className="cart-page__quantity"> {`Quantity: ${product.count}`}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartPage;
