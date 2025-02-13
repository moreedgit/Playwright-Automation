import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByRole("textbox", { name: "Username" }).fill("admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByRole("heading")).toContainText("Dashboard");

  await page
    .getByRole("banner")
    .getByRole("img", { name: "profile picture" })
    .click();

  await page.getByRole("menuitem", { name: "Logout" }).click();
});
