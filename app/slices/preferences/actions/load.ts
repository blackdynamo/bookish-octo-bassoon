import { createAsyncThunk } from "@reduxjs/toolkit";
import { APPEARANCE_STORAGE_KEY } from "~/slices/preferences/actions/storage-keys";
import { preferencesSchema } from "../schema";

export const load = createAsyncThunk("preferences/load", async () => {
  // Loading from db
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return preferencesSchema.parse({
    appearance: localStorage.getItem(APPEARANCE_STORAGE_KEY),
  });
});
