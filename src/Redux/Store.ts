import UserSlice from "./UserSlice";
import CartSlice from "./CartSlice"
import ProductsSlice from "./ProductsSlice";
import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./AuthenticationSlice";

export const store = configureStore({
  reducer: {
    userSlice: UserSlice,
    cartSlice: CartSlice,
    productsSlice: ProductsSlice,
    authenticationSlice: AuthenticationSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
