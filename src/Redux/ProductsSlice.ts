import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Types/Product";

type ProductsList =  { products: Product[]}


const initialState: ProductsList = {products: []};

const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});
export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;