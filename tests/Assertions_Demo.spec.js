import { test, expect } from "@playwright/test";

//For complete list of assertion check the Documentation: https://playwright.dev/docs/test-assertions
test("basic assertins", async ({ page }) => {
  expect(true, "expected to be true but was false").toBeTruthy();
});
