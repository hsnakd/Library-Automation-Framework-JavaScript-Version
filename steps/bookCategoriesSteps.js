import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...

// @lib-03-01
  When('user clicks the Books button', async function () {
    // Locate and click the Books button
    await PageManager.dashboardPage.booksModule.click();
  });
  
  Then('user should see the following book categories:', async function (dataTable) {
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
Then('user should be able to filter books by:', async function (dataTable) {
  const categories = dataTable.rawTable.map(row => row[0]);

  for (const category of categories) {
    // Select the category
    await PageManager.booksPage.selectCategory(category);

    // Wait for the filter to apply
    await PageManager.booksPage.waitForFilter();

    // Verify that the category header matches the selected category
    const headerCategory = await PageManager.booksPage.getCategoryHeader();
    console.log('Expected category:', category);
    console.log('Actual category header:', headerCategory);

    // Adjust the assertion if necessary
    expect(headerCategory.trim()).toBe(category);

    // Verify that the books in the table belong to the selected category
    const books = await PageManager.booksPage.getBooksInCategory();
    for (const book of books) {
      expect(book.category).toBe(category);
    }
  }
});
