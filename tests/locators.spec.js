import { test, expect } from "@playwright/test";

//test.use({ viewport: { width: 1720, height: 1400 } });

test("click button", async ({ page }) => {
  await page.goto("https://chromatechacademy.net/selenium-practice/");

  await page.getByRole("button", { name: "Add Delivery Address" }).click();
  await page.pause();

  await expect(
    page.getByRole("heading", { name: "Add Delivery Address" })
  ).toBeVisible();
  await page.pause();

  await page.close();

  // to find an element in a list
  //   const button = page.getByRole('check the accessiblity Roll: "value"')
  //   .filter({hasText: "the text on the locator"})
  //   .getByRole('button', {name: "click me"});
});
