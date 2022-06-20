import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Category, Product } from "../Types/Product";

axios.defaults.baseURL = "https://fakestoreapi.com";

const useProducts = (props: {
  isSortedByPrice?: boolean;
  isSortedByRate?: boolean;
  isSortedByCount?: boolean;
  isElectronicsSelected?: boolean;
}) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        if (props.isSortedByPrice) {
          res.data.sort(
            (productA: Product, productB: Product) => productA.price - productB.price);
        } else if (props.isSortedByRate) {
          res.data.sort(
            (productA: Product, productB: Product) => productB.rating.rate - productA.rating.rate);
        } else if (props.isSortedByCount) {
          res.data.sort(
            (productA: Product, productB: Product) => productB.rating.count - productA.rating.count);
        }
        setProducts(res.data);
        let data = []
          if(props.isElectronicsSelected) {
         data = res.data.filter((a: Product) => a.category === Category.Electronics);
           setProducts(data);
        }
         
      })
      .catch((err) => {
        setError("An error has occurred, please refresh the page");
        console.log(error)
      })
      .finally(() => {
        setloading(false);
      });
  }, [error, props.isElectronicsSelected, props.isSortedByCount, props.isSortedByPrice, props.isSortedByRate]);

  return { products, error, loading };
};

export default useProducts;
