import { test, expect } from "@playwright/test";
import exp from "constants";

test("Validate login", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.setViewportSize({ width: 2040, height: 1370 });
  await page.getByPlaceholder("Username").fill("Admin");
  // await page.waitForTimeout(1000);

  await page.getByPlaceholder("password").fill("admin123");
  // await page.waitForTimeout(1000);

  await page.locator("//button[@type='submit']").click();
  // await page.waitForTimeout(1000);

  await expect(page).toHaveURL(/dashboard/);
  // await page.waitForTimeout(1000);

  await page.getByAltText("profile picture").first().click();
  // await page.waitForTimeout(1000);

  await page.getByText("Logout").click();
  await expect(page).toHaveURL(/login/);
  await page.waitForTimeout(1000);
  await page.close();
});
