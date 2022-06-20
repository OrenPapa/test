import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Types/Product";

type CartProducts = {
  cartProducts: Array<{Product:Product | undefined, count: number}>
}


const initialState: CartProducts = {cartProducts: []};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: initialState,
  reducers: {
    setCartProducts(state, action: PayloadAction<{Product:Product  | undefined, count: number}>) {
      state.cartProducts.push(action.payload);
    },
  },
});
export const { setCartProducts } = CartSlice.actions;
export default CartSlice.reducer;
