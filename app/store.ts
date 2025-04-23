import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "~/slices/auth";
import { preferencesReducer } from "~/slices/preferences";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    preferences: preferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
