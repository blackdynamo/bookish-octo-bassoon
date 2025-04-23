import { createAsyncThunk } from "@reduxjs/toolkit";

type Appearance = "dark" | "light";

export const setAppearance = createAsyncThunk(
  "preferences/set-appearance",
  async (appearance: Appearance) => {
    // Simulate saving to db
    await new Promise((resolve) => setTimeout(resolve, 1000));
    localStorage.setItem("preferences.appearance", appearance);

    return appearance;
  },
);
