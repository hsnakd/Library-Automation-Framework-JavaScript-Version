import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage {

  // ADD YOUR LOCATORS HERE...


    /**
   * @param {import('playwright').Page} page
   */
    constructor(page) {
      super(page);
      this.userProfileImage = page.locator("//img[@id='user_avatar']");
      this.logoutButton = page.getByText("Log Out");
      this.booksModule = page.locator("//span[text()='Books']");
      this.borrowingBooksModule = page.locator("//span[text()='Borrowing Books']");
    }



}
