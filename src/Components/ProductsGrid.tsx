import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../Hooks/UseProducts";
import "../Styles/main.scss";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Sort from "./Sort";

function ProductsGrid() {
  const Navigate = useNavigate();

  const [sortState, setSortState] = useState({
    byPrice: false,
    byRate: false,
    byCount: false,
  });
  const [searchedInput, setSearchedInput] = useState("");

  const { products, error, loading } = useProducts({
    isSortedByPrice: sortState.byPrice,
    isSortedByRate: sortState.byRate,
    isSortedByCount: sortState.byCount,
    isElectronicsSelected: false,
  });

  const onNavigationToProduct = (id: number) => {
    Navigate(`/product/${id}`);
  };

  const onSortByPrice = () => {
    setSortState({
      byPrice: true,
      byRate: false,
      byCount: false,
    });
  };
  const onSortByRate = () => {
    setSortState({
      byPrice: false,
      byRate: true,
      byCount: false,
    });
  };
  const onSortByCount = () => {
    setSortState({
      byPrice: false,
      byRate: false,
      byCount: true,
    });
  };

  const onCategorySelect = (category: string) => {
    let data = products?.find((a) => a.category === category);
  };

  return (
    <div className="product-grid">
      <div className="product-grid__upper-panel">
        <Categories />
        <input
          className="product-grid__search-input"
          placeholder="Search..."
          name="search"
          value={searchedInput}
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchedInput(event.target.value)
          }
        />
        <Sort
          onByPriceClick={onSortByPrice}
          onByRatingClick={onSortByRate}
          onByCountClick={onSortByCount}
        />
      </div>

      <div className="product-grid__lower-panel">
        {loading ? (
          <div className="loading-text"> Loading...</div>
        ) : (
          products
            ?.filter((product) => {
              if (searchedInput === "") {
                return product;
              }
              if (
                product.title
                  .toLocaleLowerCase()
                  .includes(searchedInput.toLocaleLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => {
              return (
                <ProductCard
                  onProductClick={() => onNavigationToProduct(product.id)}
                  id={product.id}
                  key={product.id}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  rating={product.rating}
                />
              );
            })
        )}
      </div>
    </div>
  );
}

export default ProductsGrid;
