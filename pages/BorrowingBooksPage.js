import { BasePage } from "./BasePage.js";

export class BorrowingBooksPage extends BasePage {
  constructor(page) {
    super(page);
    this.returnedBookMessage = page.locator("//div[text()='The book has been returned..']");
    this.borrowedBookMessage = page.locator("//div[text()='The book has been borrowed...']");

  }

  async getReturnBookButton(bookName) {
    return this.page.locator(`//tr[td[normalize-space()='${bookName}'] and td[contains(text(),'NOT RETURNED ')]]/td/a[contains(text(),'Return Book')]`);
  }
}
