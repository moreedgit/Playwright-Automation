import { test, expect } from "@playwright/test";

test.describe("group of tests", () => {
  //describe group of tests, .only will run only this group of tests
  test("one", async ({ page }) => {
    // .skip will skip this test
    console.log("This is test one");
  });
  test("two", async ({ page }) => {
    // .only will run only this test
    //test.slow(); // this will give triple or more time for for the test to run, specialy for the failing part
    //await page.locator("aaaaaaaa").click();
    console.log("This is test two of group 1 with '.only'");
  });
  test("Three", async ({ page }) => {
    test.fail("This is a failed test"); //fail() will fail the test for documentation purposes
    console.log("This is test three, failed by test.fail");
  });
});

// We can also use test.describe.parallel() to run the tests in parallel

test.describe("group of tests 2", () => {
  //describe group of tests, .only will run only this group of tests
  test("5", async ({ page }) => {
    // .skip will skip this test
    console.log("This is group 2 test one");
  });
});

test("four outside describe", async ({ page }) => {
  console.log("This is test four outside describe");
});
