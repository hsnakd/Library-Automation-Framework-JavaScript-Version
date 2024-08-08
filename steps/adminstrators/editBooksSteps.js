import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";
import { PageManager } from "../../globalPagesSetup.js";
import { faker } from '@faker-js/faker';


// @lib-10-01

When('user click the Add Book button', async function () {
    await PageManager.booksPage.addBookButton.click();

});


Then('user can add a book with following information', async function (dataTable) {
    console.log(dataTable);

    // await PageManager.booksPage.fillBookInformation();

    // write the book's info to the console
    await PageManager.booksPage.fillBookInformationConsole();
      
      

    // await PageManager.booksPage.bookName.fill("name", dataTable);
    // await PageManager.booksPage.isbn.fill("1234-5678", dataTable);
    // await PageManager.booksPage.year.fill("1984", dataTable);
    // await PageManager.booksPage.author.fill("Author", dataTable);
    // await PageManager.booksPage.bookCategory.selectOption({ label: 'Drama' });
    // await PageManager.booksPage.description.fill("Description", dataTable);

    // save the changes
    await PageManager.booksPage.saveChangesButton.click();

});

Then('verify that the book is already added', async function () {

    Then('verify that the book is already added', async function () {
        const bookName = this.bookData.bookName;
        const isbn = this.bookData.isbn;
        const year = this.bookData.year;
        const author = this.bookData.author;
        const category = this.bookData.bookCategory;
        const description = this.bookData.description;
    
        // Wait for the books table to be visible
        await PageManager.booksPage.booksTable.waitFor({ state: 'visible' });
    
        // Check if the book is present in the table
        const rowLocator = PageManager.booksPage.booksTable.locator(`//tbody/tr[td[contains(text(), '${bookName}') and td[contains(text(), '${isbn}') and td[contains(text(), '${year}') and td[contains(text(), '${author}') and td[contains(text(), '${category}')]]]]]`);
        
        // Ensure that the row with the book details is visible
        const isBookPresent = await rowLocator.isVisible();
        expect(isBookPresent).toBe(true, 'The book was not found in the table');
    });
    
    
});

// @lib-10-02
When('user searches the book they want to edit {string}', async function (bookName) {
    await PageManager.booksPage.searchBox.fill(bookName);
  });
When('the user clicks the Edit Book button for the {string}', async function (bookName) {
    (await PageManager.booksPage.getEditBookButton(bookName)).click();
});

When('admin edits the book with the following details', async function (dataTable) {
    await PageManager.booksPage.editBookInformationConsole();
        await PageManager.booksPage.saveChangesButton.click();
});