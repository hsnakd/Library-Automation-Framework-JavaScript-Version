import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...

// @lib-03-01
  
  Then('user should see the following book categories:', async function (dataTable) {
    PageManager.booksPage.bookCategories.bookCategories
    const expectedCategories = dataTable.rawTable.map(row => row[0]);
    console.log(expectedCategories);
  
    const actualCategories = await PageManager.booksPage.bookCategories.evaluate(select => {
      return Array.from(select.options).map(option => option.text);
    });
    
    console.log(actualCategories);
  
    // Check if all expected categories are present in the drop-down
    for (const category of expectedCategories) {
      expect(actualCategories).toContain(category);
    }
  });



// @lib-03-02
When('user clicks Books link', async function () {
  await PageManager.dashboardPage.booksLink.click();
});

When('user clicks the book categories drop down box', async function () {
  await PageManager.booksPage.bookCategoriesDropDown.click();
});

Then('user should see {int} book categories', async function (int) {
  const totalOptions = await PageManager.booksPage.bookCategoriesDropDown.locator("option").count();
  expect(totalOptions).toBe(int);
});


// @lib-03-03
Then('book category name {string} should be inlcuded in the categories', async function (string) {
    const options = await PageManager.booksPage.bookCategoriesDropDown.locator("option").allInnerTexts();
    expect(options).toContain(string);
});