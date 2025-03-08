import { test, expect } from "@playwright/test";
// test.describe("Verify Error Message", () => {
test("Verify Error Messages", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill("Admin");
  // await page.waitForTimeout(1000);

  await page.getByPlaceholder("password").fill("admin1234");
  // await page.waitForTimeout(1000);

  await page.locator("//button[@type='submit']").click();
  // await page.waitForTimeout(1000);

  // const errorMessage = await page
  //   .locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
  //   .textContent(); // assertion
  // expect(errorMessage).toContain("Invalid credentials");
  // expect(errorMessage.includes("Invalid")).toBeTruthy(); //assertion
  // expect(errorMessage === "Invalid credentials").toBeTruthy(); //assertion

  // console.log("Error message is: ", errorMessage);
  await page.waitForTimeout(1000);
  await page.close();
});
// })
