import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";
import { PageManager } from "../../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...

When('user clicks the Borrowing Books module', async function () {
    await PageManager.dashboardPage.borrowingBooksModule.click();

  });

When('user sees that the book they want to return is available with the Return Book button', async function () {
     await expect(PageManager.borrowingBooksPage.returnBookButtonSylviaRobertson).toBeVisible();
});

When('user click Return Book button', async function () {
    await PageManager.borrowingBooksPage.returnBookButtonSylviaRobertson.click();   
});

Then('the message {string} will be displayed', async function (errorMessage) {
    await expect(PageManager.borrowingBooksPage.returnBookButtonSylviaRobertson).toBeHidden();
    await BrowserUtility.verifyMessages(errorMessage, await PageManager.borrowingBooksPage.bookReturnedErrorMessage.innerText());

});