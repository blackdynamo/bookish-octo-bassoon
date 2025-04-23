import type { RootState } from "~/store";

export const selectPreferences = (state: RootState) => state.preferences;
