import { test, expect } from "@playwright/test";

test("Login test for a web application", async ({ page }) => {
  // Navigate to the login page
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Fill in login credentials
  await page.fill('input[name="username"]', "Admin");
  await page.fill('input[name="password"]', "admin123");

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for navigation to the home page
  await page.waitForURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );

  // Validate successful login by checking an element on the home page
  await expect(page.locator("h6")).toHaveText("Dashboard");

  await page.waitForTimeout(2000); // Wait for 2 seconds
  // // // //   // take screenshot of home page
  await page.screenshot({ path: "screenshots/home_page.png" });

  await page.close();
  //testing github file edit
});
