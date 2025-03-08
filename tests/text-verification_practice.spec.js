import{test, expect} from '@playwright/test';

test("verify text", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/")
   const heading = page.getByRole('heading', { name: 'Selenium Playground' });
   await expect(heading).toHaveText('Selenium Playground');
  // console.log("The heading is: ",await heading.textContent());
   console.log("The heading is: "+await heading.textContent());//.textContent() method returns the text content of the element
})

test ("google search", async({page}) =>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home")
    await page.getByRole('textbox', { name: 'Search' }).fill('iphone');
    await page.locator("//button[@class='btn btn-default btn-lg']").click();
    const heading = page.getByRole('heading', {name: 'Search - iphone'}).first();
    await expect(heading).toHaveText('Search - iphone');
    console.log(await heading.textContent());

    });
