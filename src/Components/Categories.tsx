import React from "react";
import { Category } from "../Types/Product";

function Categories(props: {
  onElectronicsSelected?: () => void;
  onJewelerySelected?: () => void;
  onMenSClothingSelected?: () => void;
  onWomenSClothingSelected?: () => void;
}) {
  return (
    <div className="categories-container">
      <div
        onClick={props.onElectronicsSelected}
        className="categories-container__categorie-item"
      >
        {Category.Electronics}
      </div>
      <div
        onClick={props.onJewelerySelected}
        className="categories-container__categorie-item"
      >
        {Category.Jewelery}
      </div>
      <div
        onClick={props.onMenSClothingSelected}
        className="categories-container__categorie-item"
      >
        {Category.MenSClothing}
      </div>
      <div
        onClick={props.onWomenSClothingSelected}
        className="categories-container__categorie-item"
      >
        {Category.WomenSClothing}
      </div>
    </div>
  );
}

export default Categories;
