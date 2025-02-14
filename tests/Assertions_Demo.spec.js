import { test, expect } from "@playwright/test";

//For complete list of assertion check the Documentation: https://playwright.dev/docs/test-assertions
test("basic assertins", async ({ page }) => {
  await page.goto(baseURL);
  const title = await page.title();
  expect(title).toBe("Chroma Tech Academy");
  console.log("Title is: ", title);
});
