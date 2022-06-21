import React, { useState } from "react";
import { Category } from "../Helpers/Enums";

function Categories(props: {
  onElectronicsSelected?: () => void;
  onJewelerySelected?: () => void;
  onMenSClothingSelected?: () => void;
  onWomenSClothingSelected?: () => void;
  onRemoveFilters?: () => void;
  selectedCategory?: string;
}) {
  return (
    <div className="categories-container">
      <div
        onClick={props.onElectronicsSelected}
        className={`categories-container__categorie-item ${
          props.selectedCategory === Category.Electronics &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.Electronics}
      </div>
      <div
        onClick={props.onJewelerySelected}
        className={`categories-container__categorie-item ${
          props.selectedCategory === Category.Jewelery &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.Jewelery}
      </div>
      <div
        onClick={props.onMenSClothingSelected}
        className={`categories-container__categorie-item ${
          props.selectedCategory === Category.MenSClothing &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.MenSClothing}
      </div>
      <div
        onClick={props.onWomenSClothingSelected}
        className={`categories-container__categorie-item ${
          props.selectedCategory === Category.WomenSClothing &&
          "categories-container__categorie-item--selected"
        }`}
      >
        {Category.WomenSClothing}
      </div>
      <div
        onClick={props.onRemoveFilters}
        className="categories-container__text"
      >
        Clear Filters
      </div>
    </div>
  );
}

export default Categories;
