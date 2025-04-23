import { beforeEach, describe, expect, test } from "vitest";
import { APPEARANCE_STORAGE_KEY } from "~/slices/preferences/actions/storage-keys";
import { store } from "~/store";
import { signIn } from "./sign-in";

beforeEach(() => {
  fetchMock.resetMocks();

  fetchMock.mockImplementation(async (url) => {
    if (url === "https://mocki.io/v1/54d484e7-919f-4064-a4be-020bf66c038b") {
      return new Response(JSON.stringify({ email: "test@email.com" }));
    }

    throw new Error("Unknown url");
  });
});

describe(signIn.name, () => {
  test("should properly set state", async () => {
    await store.dispatch(signIn());
    expect(store.getState().auth.authenticated).toEqual(true);
    expect(store.getState().auth.email).toEqual("test@email.com");
  });

  test("should load preferences", async () => {
    expect(store.getState().preferences.appearance).toEqual("dark");
    localStorage.setItem(APPEARANCE_STORAGE_KEY, "light");
    await store.dispatch(signIn());
    expect(store.getState().preferences.appearance).toEqual("light");
  });
});
