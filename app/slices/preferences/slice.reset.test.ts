import { describe, expect, test } from "vitest";
import { APPEARANCE_STORAGE_KEY } from "~/slices/preferences/actions/storage-keys";
import { store } from "~/store";
import { setAppearance } from "./actions/set-appearance";
import { slice } from "./slice";

describe("preferences", () => {
  test("should properly set state", async () => {
    await store.dispatch(setAppearance("light"));
    expect(store.getState().preferences.appearance).toEqual("light");

    store.dispatch(slice.actions.reset());
    expect(store.getState().preferences.appearance).toEqual("dark");
  });

  test("should not change localStorage", async () => {
    await store.dispatch(setAppearance("light"));
    expect(localStorage.getItem(APPEARANCE_STORAGE_KEY)).toEqual("light");

    store.dispatch(slice.actions.reset());
    expect(localStorage.getItem(APPEARANCE_STORAGE_KEY)).toEqual("light");
  });
});
