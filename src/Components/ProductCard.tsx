import { Icon } from "@iconify/react";
import { Product } from "../Types/Product";
import "../Styles/main.scss";

function ProductCard({ image, price, title, rating, onProductClick }: Product) {
  return (
    <div onClick={onProductClick} className="product-card">
      <div className="product-card__content">
        <img className="product-card__image" src={image} alt="product" />
        <div className="product-card__info-container">
          <div className="product-card__title-container">
            <div className="product-card__title">{title}</div>
          </div>

          <div className="product-card__lower-section">
            <div className="product-card__price">{`$${price}`}</div>
            <div className="product-card__rating-container">
              {`${rating.rate}`}
              <Icon
                icon="emojione:star"
                color="#546c87"
                width="15"
                height="15"
              />
              <div className="product-card__small-text">{`(${rating.count})`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
