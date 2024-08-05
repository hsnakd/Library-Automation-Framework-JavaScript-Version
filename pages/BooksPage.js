import { BasePage } from "./BasePage.js";

export class BooksPage extends BasePage {
  constructor(page) {
    super(page);
    this.bookCategories = page.locator("//select[@id='book_categories']");
    this.booksTable = page.locator("//table[@id='tbl_books']");
    this.searchBox = page.locator("//input[@type='search']");
  }

  async getBorrowBookButton(bookName) {
    return this.page.locator(`//tr[td[normalize-space()='${bookName}']]/td/a[contains(text(),'Borrow Book')]`);
  }

  async getReturnBookButton(bookName) {
    return this.page.locator(`//tr[td[normalize-space()='${bookName}']]/td/a[contains(text(),'Return Book')]`);
  }
}
