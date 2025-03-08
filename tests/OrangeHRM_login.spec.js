import { test, expect } from "@playwright/test";
import { config } from "./config";

test("Login test for a web application", async ({ page }) => {
  // Navigate to the login page
  await page.goto(config.loginUrl);

  // Fill in login credentials
  await page.fill('input[name="username"]', config.username);
  await page.fill('input[name="password"]', config.password);

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for navigation to the home page
  await page.waitForURL(config.dashboardUrl);

  // Validate successful login by checking an element on the home page
  await expect(page.locator("h6")).toHaveText("Dashboard");

  await page.waitForTimeout(2000); // Wait for 2 seconds
  // // // //   // take screenshot of home page
  await page.screenshot({ path: config.screenshotPath });

  await page.close();
  //testing github file edit
});
