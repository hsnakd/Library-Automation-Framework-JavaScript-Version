import { BasePage } from "./BasePage.js";

export class BorrowingBooksPage extends BasePage {

  // ADD YOUR LOCATORS HERE...

  constructor(page) {
    super(page);
    this.borrowBookButtonSylviaRobertson = page.locator("//tr[td[normalize-space()='Sylvia Robertson']]/td/a[contains(text(),'Borrow Book')]");    
    
    this.returnBookButtonSylviaRobertson = page.locator("//tr[td[normalize-space()='Sylvia Robertson'] and td[contains(text(),'NOT RETURNED ')]]/td/a[contains(text(),'Return Book')]");

    this.bookReturnedErrorMessage = page.locator("//div[text()='The book has been returned..']");


  }
}
