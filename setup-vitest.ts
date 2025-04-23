import { beforeEach, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { createMockStorage } from "./mock-storage";

// Mock fetch
createFetchMock(vi).enableMocks();

// Mock local storage
beforeEach(() => {
  // noinspection JSConstantReassignment
  global.localStorage = createMockStorage();
});
