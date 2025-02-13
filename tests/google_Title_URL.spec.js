import { test, expect } from "@playwright/test";

test("Verify Application Title", async ({ page }) => {
  await page.goto("https://google.com/");
  const url = page.url();
  console.log(`Title of the page is: ${url}`);
  const title = await page.title();
  console.log(`Title of the page is: ${title}`);
  await expect(page).toHaveTitle("Google");
  page.close();
});
