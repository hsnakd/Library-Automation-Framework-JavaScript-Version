import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";
import { PageManager } from "../../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...

When('user clicks the Borrowing Books module', async function () {
    await PageManager.dashboardPage.borrowingBooksModule.click();
});

When('user sees that the book they want to return is available with the Return Book button {string}', async function (bookName) {
    const returnButton = await PageManager.borrowingBooksPage.getReturnBookButton(bookName);
    await expect(returnButton).toBeVisible();
});

When('user clicks on the Return Book button of {string}', async function (bookName) {
    const returnButton = await PageManager.borrowingBooksPage.getReturnBookButton(bookName);
    await returnButton.click();
});

Then('the message {string} will be displayed for returned book', async function (errorMessage) {
    await BrowserUtility.verifyMessages(errorMessage, await PageManager.borrowingBooksPage.returnedBookMessage.innerText());
});


