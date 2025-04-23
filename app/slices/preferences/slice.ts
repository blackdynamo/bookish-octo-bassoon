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
    reset: () => {
      return {
        appearance: DEFAULT_APPEARANCE,
      } as const;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        load.fulfilled,
        (state, action) => ({ ...state, ...action.payload }) as const,
      )
      .addCase(
        setAppearance.fulfilled,
        (state, action) => ({ ...state, appearance: action.payload }) as const,
      );
  },
});
