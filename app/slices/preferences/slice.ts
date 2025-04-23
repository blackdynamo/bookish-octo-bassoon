import { createSlice } from "@reduxjs/toolkit";
import { load } from "./actions/load";
import { setAppearance } from "./actions/set-appearance";
import { DEFAULT_APPEARANCE, type Preferences } from "./schema";

type PreferencesState = Preferences;

const initialState: PreferencesState = {
  appearance: DEFAULT_APPEARANCE,
} as const;

export const slice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    reset: (state) => {
      state.appearance = DEFAULT_APPEARANCE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(load.fulfilled, (state, { payload }) => {
        state.appearance = payload.appearance;
      })
      .addCase(setAppearance.fulfilled, (state, { payload }) => {
        state.appearance = payload;
      });
  },
});
