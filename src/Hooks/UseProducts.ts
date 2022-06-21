import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Product } from "../Types/Product";
import { Category, Sorts } from "../Helpers/Enums";

axios.defaults.baseURL = "https://fakestoreapi.com";

const useProducts = (props: {
 sortType?: string

}) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        if (props.sortType === Sorts.byPrice) {
          res.data.sort(
            (productA: Product, productB: Product) => productA.price - productB.price);
        } else if (props.sortType === Sorts.byRate) {
          res.data.sort(
            (productA: Product, productB: Product) => productB.rating.rate - productA.rating.rate);
        } else if (props.sortType === Sorts.byCount) {
          res.data.sort(
            (productA: Product, productB: Product) => productB.rating.count - productA.rating.count);
        }
        setProducts(res.data);
         
      })
      .catch((err) => {
        setError("An error has occurred, please refresh the page");
        console.log(error)
      })
      .finally(() => {
        setloading(false);
      });
  }, [error, props.sortType]);

  return { products, error, loading };
};

export default useProducts;
