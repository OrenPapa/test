import React, { useState } from "react";
import { Category } from "../Helpers/Enums";

function Categories(props: {
  onElectronicsSelected?: () => void;
  onJewelerySelected?: () => void;
  onMenSClothingSelected?: () => void;
  onWomenSClothingSelected?: () => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const onCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories-container">
      <div
        onMouseDown={() => onCategorySelect(Category.Electronics)}
        onClick={props.onElectronicsSelected}
        className={`categories-container__categorie-item ${
          selectedCategory === Category.Electronics &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.Electronics}
      </div>
      <div
        onMouseDown={() => onCategorySelect(Category.Jewelery)}
        onClick={props.onJewelerySelected}
        className={`categories-container__categorie-item ${
          selectedCategory === Category.Jewelery &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.Jewelery}
      </div>
      <div
        onMouseDown={() => onCategorySelect(Category.MenSClothing)}
        onClick={props.onMenSClothingSelected}
        className={`categories-container__categorie-item ${
          selectedCategory === Category.MenSClothing &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.MenSClothing}
      </div>
      <div
        onMouseDown={() => onCategorySelect(Category.WomenSClothing)}
        onClick={props.onWomenSClothingSelected}
        className={`categories-container__categorie-item ${
          selectedCategory === Category.WomenSClothing &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.WomenSClothing}
      </div>
      <div onClick={()=> setSelectedCategory("")} className="categories-container__text">Clear Filters</div>
    </div>
  );
}

export default Categories;
