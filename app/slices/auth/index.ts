import { slice } from "./slice";

export * as authActions from "./actions";
export * as authSelectors from "./selectors";
export const authReducer = slice.reducer;
