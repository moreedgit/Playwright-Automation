import { test, expect } from "@playwright/test";

test("My First Test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});
test("My Second Test", async ({ page }) => {
  expect(100).toBe(100);
});
test("My Third Test", async ({ page }) => {
  expect("Mukesh Otwani").toContain("Mukesh");
});
test("My Forth Test", async ({ page }) => {
  expect("Mukesh Otwani").toContain("Mukesh");
  expect("Mukesh Otwani".includes("Otwani")).toBeTruthy();
});
