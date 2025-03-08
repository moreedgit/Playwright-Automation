import { test, expect } from "@playwright/test";

test.afterAll(() => {
  console.log("After all");
});

test.afterEach(() => {
  console.log("After each");
});
test.beforeAll(() => {
  console.log("Before all");
});

test.beforeEach(() => {
  console.log("Before each");
});

test("one", async ({ page }) => {
  // expect(x).toBe(1);
});

test("two", async ({ page }) => {
  //  expect(x).toBe(2);
});

/**
 * test one:
 Before all
Before each
After each
  test two
Before each
After each
After all
 */
