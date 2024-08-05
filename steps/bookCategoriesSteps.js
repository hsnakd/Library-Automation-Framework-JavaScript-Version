import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...

// @lib-03-01
  When('user clicks the Books module', async function () {
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
