import { BasePage } from "./BasePage.js";

export class BooksPage extends BasePage {
  constructor(page) {
    super(page);
    this.bookCategories = page.locator("//select[@id='book_categories']");
    this.booksTable = page.locator("//table[@id='tbl_books']");
    this.searchBox = page.locator("//input[@type='search']");

    this.bookCategoriesDropDown = page.locator("//select[@id='book_categories']");

  }

  async getBorrowBookButton(bookName) {
    return this.page.locator(`//tr[td[normalize-space()='${bookName}']]/td/a[contains(text(),'Borrow Book')]`);
  }

  async getReturnBookButton(bookName) {
    return this.page.locator(`//tr[td[normalize-space()='${bookName}']]/td/a[contains(text(),'Return Book')]`);
  }

  

  async getBookCategories() {
    console.log('Waiting for book categories to be visible...');

    await this.bookCategories.waitFor({ state: 'visible' });

    // Wait for the dropdown to be populated with options
    await this.page.waitForFunction(select => {
        const options = Array.from(select.options);
        return options.length > 1; // Check if there are more than one option (assuming "ALL" is the first)
    }, this.bookCategories);

    // Log the current options in the dropdown
    const currentOptions = await this.bookCategories.evaluate(select => {
        return Array.from(select.options).map(option => option.text);
    });
    console.log('Current dropdown options:', currentOptions);

    console.log('Evaluating book categories...');
    const categories = await this.bookCategories.evaluate(select => {
        const options = Array.from(select.options);
        return options
            .filter(option => option.value !== "null")
            .map(option => option.textContent.trim());
    });

    console.log('Fetched categories:', categories);
    return categories;
  }
}
  
  
  

