import { createAsyncThunk } from "@reduxjs/toolkit";
import { load } from "~/slices/preferences/actions";

export const signIn = createAsyncThunk("auth/sign-in", async (_, thunkAPI) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Apparently you CAN await dispatch, which means you could Promise.all a bunch of actions
  // which allows you to do things like loading preferences when signing in. It will load up
  // the preferences store with the data, THEN update the authenticated stuff.
  const preferencesAction = await thunkAPI.dispatch(load());

  console.info("Loaded preferences", preferencesAction);

  return {
    authenticated: true,
    email: "user@email.com",
  } as const;
});
