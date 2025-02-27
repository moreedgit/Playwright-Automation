import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://commitquality.com");
  const fakeDropdown = page.locator("#fake-filterDropdown");
  const filterTextbox = page.locator(".filter-textbox");
  // or() is used to check if the second locator is visible in case the first locator is not visible
  await expect(fakeDropdown.or(filterTextbox)).toBeVisible();

  if (await fakeDropdown.isVisible()) {
    await expect(fakeDropdown).toBeVisible();
  } else if (await filterTextbox.isVisible()) {
    await filterTextbox.fill("test");
  }
});
test("all getBy methods", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=iphone"
  );

  await page.pause();
  await page.getByPlaceholder("Search").fill("iphone"); // getByPlaceholder() picks the predefined text in the textbox
  await page.pause();
  await page.keyboard.press("Enter");
  await page.pause();
  //await expect(page.getByPlaceholder("Search")).toHaveText("iphone");//
  await page.locator("//i[@class='fa fa-home']").click();
});
// getByTestId() is used to get the element by test id

// getByRole()
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

test("locators and selectors", async ({ page }) => {
  await page.goto("https://chromatechacademy.net/selenium-practice/");
  await page.pause();
  //await page.locator("#name").fill("Moreed");
  await page.getByPlaceholder("Enter Your Name").fill("Moreed");

  await page.getByRole("button", { name: "Confirm" }).click();
});
