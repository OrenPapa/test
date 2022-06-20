import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthenticationStatus = {
    authenticated: boolean
}

const initialState: AuthenticationStatus = {authenticated: false};

const AuthenticationSlice = createSlice({
  name: "AuthenticationSlice",
  initialState: initialState,
  reducers: {
    setAuthenticationStatus(state, action: PayloadAction<boolean>) {
    state.authenticated = action.payload
    },
  },
});
export const { setAuthenticationStatus } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
