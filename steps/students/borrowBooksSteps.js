import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";
import { PageManager } from "../../globalPagesSetup.js";


// WRITE YOUR STEP DEFINITIONS HERE...

// @lib-06-01

When('user searches the book they want to borrow {string}', async function (bookName) {
    await PageManager.booksPage.searchBox.fill(bookName);
});

When('user sees that the book they want to borrow is available {string}', async function (bookName) {
    const borrowButton = await PageManager.booksPage.getBorrowBookButton(bookName);
    await expect(borrowButton).toBeVisible();
});

When('user clicks on the Borrow Book button of {string}', async function (bookName) {
    const borrowButton = await PageManager.booksPage.getBorrowBookButton(bookName);
    await borrowButton.click();
});

Then('the message {string} will be displayed', async function (errorMessage) {
    await BrowserUtility.verifyEqualMessages(errorMessage, await PageManager.borrowingBooksPage.borrowedBookMessage.innerText());

});

