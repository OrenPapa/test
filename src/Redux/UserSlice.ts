import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../Types/User";

const initialState = {} as User;

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: initialState,
  reducers: {
    setUserData(state, action: PayloadAction<User>) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.image = action.payload.image;
      state.password = action.payload.password;
    },
  },
});
export const { setUserData } = UserSlice.actions;
export default UserSlice.reducer;
