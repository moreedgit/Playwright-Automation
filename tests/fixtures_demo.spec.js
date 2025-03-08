import { test, expect, chromium } from "@playwright/test"; //import chromium from Playwright

test("test without fixture", async ({}) => {
  // Create a chrome browser
  const browser = await chromium.launch();

  // Create incognito context
  const context = await browser.newContext();

  // Create a page
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");
});
