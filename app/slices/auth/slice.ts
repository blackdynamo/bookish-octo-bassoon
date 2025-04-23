import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./actions/sign-in";

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
  reducers: {
    signOut: (state) => ({
      ...state,
      authenticated: false,
      email: undefined,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        console.info("auth/sign-in/pending");

        return {
          ...state,
          authenticating: true,
        } as const;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.info("auth/sign-in/fulfilled");

        return {
          ...state,
          ...action.payload,
          authenticating: false,
        } as const;
      });
  },
});
