import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Category, Sorts } from "../Helpers/Enums";
import useProducts from "../Hooks/UseProducts";
import "../Styles/main.scss";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Sort from "./Sort";

function ProductsGrid() {
  const Navigate = useNavigate();
  const [sortState, setSortState] = useState("");
  const [searchedInput, setSearchedInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { products, loading } = useProducts({
    sortType: sortState,
  });

  const onNavigationToProduct = (id: number) => {
    Navigate(`/product/${id}`);
  };

  const onProductsSort = (sortType: string) => {
    setSortState(sortType);
  };

  const onCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory === Category.Electronics) {
    }
  }, [selectedCategory]);

  return (
    <div className="product-grid">
      <div className="product-grid__upper-panel">
        <Categories
          selectedCategory={selectedCategory}
          onElectronicsSelected={() => onCategorySelect(Category.Electronics)}
          onJewelerySelected={() => onCategorySelect(Category.Jewelery)}
          onMenSClothingSelected={() => onCategorySelect(Category.MenSClothing)}
          onWomenSClothingSelected={() =>
            onCategorySelect(Category.WomenSClothing)
          }
          onRemoveFilters={() => onCategorySelect("")}
        />
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
          onByPriceClick={() =>
            onProductsSort(sortState === Sorts.byPrice ? "" : Sorts.byPrice)
          }
          onByRatingClick={() =>
            onProductsSort(sortState === Sorts.byRate ? "" : Sorts.byRate)
          }
          onByCountClick={() =>
            onProductsSort(sortState === Sorts.byCount ? "" : Sorts.byCount)
          }
        />
      </div>

      <div className="product-grid__lower-panel">
        {loading ? (
          <div className="loading-text"> Loading...</div>
        ) : selectedCategory === "" ? (
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
        ) : (
          products
            ?.filter((product) => {
              if (selectedCategory === Category.Electronics) {
                return product.category === Category.Electronics;
              } else if (selectedCategory === Category.Jewelery) {
                return product.category === Category.Jewelery;
              } else if (selectedCategory === Category.MenSClothing) {
                return product.category === Category.MenSClothing;
              } else if (selectedCategory === Category.WomenSClothing) {
                return product.category === Category.WomenSClothing;
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
