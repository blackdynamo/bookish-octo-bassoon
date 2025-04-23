import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./actions/sign-in";
import { signOut } from "./actions/sign-out";

type AuthState = {
  authenticated: boolean;
  authenticating: boolean;
  email?: string;
};

const initialState: AuthState = {
  authenticated: false,
  authenticating: false,
  email: undefined,
} as const;

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.authenticating = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.authenticated = payload.authenticated;
        state.authenticating = false;
        state.email = payload.email;
      })
      .addCase(signOut.fulfilled, (state, { payload }) => {
        state.authenticated = payload.authenticated;
        state.email = payload.email;
      });
  },
});
