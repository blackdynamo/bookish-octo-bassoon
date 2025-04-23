export const createMockStorage = (): Storage => {
  const store: Record<string, string | undefined> = {};

  return {
    get length() {
      return Object.keys(store).length;
    },
    clear: () => {},
    getItem: (key: string) => store[key] ?? null,
    key: (index: number) => Object.keys(store)[index] ?? null,
    removeItem: (key: string) => {
      delete store[key];
    },
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
  };
};
