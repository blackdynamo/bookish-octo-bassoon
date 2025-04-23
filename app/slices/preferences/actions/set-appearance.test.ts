import { describe, expect, test } from "vitest";
import { APPEARANCE_STORAGE_KEY } from "~/slices/preferences/actions/storage-keys";
import { store } from "~/store";
import { setAppearance } from "./set-appearance";

describe(setAppearance.name, () => {
  test("should properly set state", async () => {
    await store.dispatch(setAppearance("light"));
    expect(store.getState().preferences.appearance).toEqual("light");

    await store.dispatch(setAppearance("dark"));
    expect(store.getState().preferences.appearance).toEqual("dark");
  });

  test("should properly set localStorage", async () => {
    await store.dispatch(setAppearance("light"));
    expect(localStorage.getItem(APPEARANCE_STORAGE_KEY)).toEqual("light");

    await store.dispatch(setAppearance("dark"));
    expect(localStorage.getItem(APPEARANCE_STORAGE_KEY)).toEqual("dark");
  });
});
