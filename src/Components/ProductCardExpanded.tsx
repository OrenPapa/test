import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useProducts from "../Hooks/UseProducts";
import { setCartProducts } from "../Redux/CartSlice";
import { Product } from "../Types/Product";

function ProductCardExpanded() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let productId = parseInt(id!);
  const [count, setCount] = useState(1);
  const onAddProduct = () => {
    setCount(count + 1);
  };
  const onRemoveProduct = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const { products, loading } = useProducts({});

  const Product = products?.find(
    (product: Product) => product.id === productId
  );

  const onAddToCard = () => {
    count > 0 && dispatch(setCartProducts({ Product, count }));
  };

  return (
    <div className="product-card-expanded">
      {loading ? (
        <div className="loading-text"> Loading...</div>
      ) : (
        <div className="product-card-expanded__content">
          <div className="product-card-expanded__left-panel">
            <img
              className="product-card-expanded__product-image"
              src={Product?.image}
              alt="Product"
            />
            <div className="product-card-expanded__left-lower-panel">
              <div className="product-card-expanded__add-to-card-container">
                <div
                  className="product-card-expanded__icon"
                  onClick={onRemoveProduct}
                >
                  <Icon
                    icon="ant-design:minus-outlined"
                    color="#546c87"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="product-card-expanded__count">{`${count}`}</div>

                <div
                  className="product-card-expanded__icon"
                  onClick={onAddProduct}
                >
                  <Icon
                    icon="ant-design:plus-outlined"
                    color="#546c87"
                    width="40"
                    height="40"
                  />
                </div>
              </div>
              <button
                onClick={onAddToCard}
                className={`product-card-expanded__button ${count === 0 && "product-card-expanded__button--disabled"}`}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="product-card-expanded__right-panel">
            <div className="product-card-expanded__title">{Product?.title}</div>
            <div className="product-card-expanded__description">
              {Product?.description}
            </div>
            <div className="product-card-expanded__categorie">
              {`Category: ${Product?.category}`}
            </div>
            <div className="product-card-expanded__right-lower-panel">
              <div className="product-card-expanded__price">{`$${Product?.price}`}</div>
              <div className="product-card-expanded__rating-container">
                {`${Product?.rating.rate}`}
                <Icon
                  icon="emojione:star"
                  color="#546c87"
                  width="20"
                  height="20"
                />
                <div className="product-card-expanded__small-text">{`(${Product?.rating.count})`}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCardExpanded;
