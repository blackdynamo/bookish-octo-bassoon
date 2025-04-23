import { createAsyncThunk } from "@reduxjs/toolkit";
import { preferencesActions } from "~/slices/preferences";

export const signOut = createAsyncThunk(
  "auth/sign-out",
  async (_, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    thunkAPI.dispatch(preferencesActions.reset());

    return {
      authenticated: false,
      email: undefined,
    } as const;
  },
);
