import { createAsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";
import { preferencesActions } from "~/slices/preferences";

const userSchema = z.object({
  email: z.string().email(),
});

export const signIn = createAsyncThunk("auth/sign-in", async (_, thunkAPI) => {
  // Obviously don't hardcode this
  const rawResponse = await fetch(
    "https://mocki.io/v1/54d484e7-919f-4064-a4be-020bf66c038b",
  ).then((r) => r.json());

  const user = userSchema.parse(rawResponse);

  // Dispatch is smart enough to know that it's a thunk vs a action and allows await in the
  // event of a thunk. Which means you could Promise.all a bunch of thunks which allows you
  // to do things like loading preferences when signing in. It will load up the preferences
  // store with the data, THEN update the authenticated stuff.
  await thunkAPI.dispatch(preferencesActions.load());

  return {
    authenticated: true,
    email: user.email,
  } as const;
});
