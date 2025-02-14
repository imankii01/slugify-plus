import { slugify } from "../src/slugify";

describe("Slugify Function", () => {
  test("Basic slug generation", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  test("Custom separator", () => {
    expect(slugify("Hello World", { separator: "_" })).toBe("hello_world");
  });

  test("Stop word removal", () => {
    expect(slugify("The Quick Brown Fox", { removeStopWords: true })).toBe("quick-brown-fox");
  });

  test("Max length", () => {
    expect(slugify("This is a very long title", { maxLength: 10 })).toBe("this-is-a");
  });
});
