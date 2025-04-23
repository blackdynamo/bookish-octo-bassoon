import { createAsyncThunk } from "@reduxjs/toolkit";
import { preferencesActions } from "~/slices/preferences";

export const signIn = createAsyncThunk("auth/sign-in", async (_, thunkAPI) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Dispatch is smart enough to know that it's a thunk vs a action and allows await in the
  // event of a thunk. Which means you could Promise.all a bunch of thunks which allows you
  // to do things like loading preferences when signing in. It will load up the preferences
  // store with the data, THEN update the authenticated stuff.
  const preferencesAction = await thunkAPI.dispatch(preferencesActions.load());

  console.info("Loaded preferences", preferencesAction);

  return {
    authenticated: true,
    email: "user@email.com",
  } as const;
});
