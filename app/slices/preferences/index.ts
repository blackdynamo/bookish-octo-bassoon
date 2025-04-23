import { slice } from "./slice";

export * as preferencesActions from "./actions";
export * as preferencesSelectors from "./selectors";
export const preferencesReducer = slice.reducer;
