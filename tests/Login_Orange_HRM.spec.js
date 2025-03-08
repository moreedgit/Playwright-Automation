import { test, expect } from "@playwright/test";

test("Validate login", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //const heading = page.getByRole("heading", { name: "Login" });

  const heading = page.getByRole("heading", { name: /login/i }); // The i after the / indicates case-insensitive

  // Ensure it is visible within a timeout of 5 seconds
  await expect(heading).toHaveText("Login");

  // Fetch the text content of the heading
  const headingText = await heading.textContent();

  // Ensure the text is not null or empty before logging
  if (headingText) {
    console.info(`✅ Heading text is: "${headingText.trim()}"`);
  } else {
    console.warn("⚠️ Warning: Heading text is empty or not found.");
  }

  // const heading = page.getByRole("heading", { name: "Login" });
  // await expect(heading).toBeVisible();
  // const headingText = await heading.textContent(); // textContent() grabs the text of the element

  // console.log(`heading text is: ${headingText}`);

  await page.setViewportSize({ width: 2040, height: 1370 });
  await page.getByPlaceholder("Username").fill("Admin");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("password").fill("admin123");
  await page.waitForTimeout(1000);

  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(1000);

  // await expect(page).toHaveURL(/dashboard/);
  // // await page.waitForTimeout(1000);

  // await page.getByAltText("profile picture").first().click();
  // // await page.waitForTimeout(1000);

  // await page.getByText("Logout").click();
  // await expect(page).toHaveURL(/login/);
  // await page.waitForTimeout(1000);
  // await page.close();
});
