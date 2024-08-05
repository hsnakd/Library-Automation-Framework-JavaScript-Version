import { BasePage } from "./BasePage.js";

export class BooksPage extends BasePage {
  constructor(page) {
    super(page);
    this.bookCategories = page.locator("//select[@id='book_categories']");
    this.booksTable = page.locator("//table[@id='tbl_books']");

  }
  
}
