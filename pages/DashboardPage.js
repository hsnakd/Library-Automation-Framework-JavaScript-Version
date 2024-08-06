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

      this.borrowingBooksModule = page.locator("//span[text()='Borrowing Books']");

      // this.booksLink = page.locator("//a[@href='#books' and @class='nav-link']");
      this.booksLink = page.locator("//span[text()='Books']");
      
    }

  getModuleLocator(moduleName) {
      return this.page.locator(`//span[text()='${moduleName}']`);
  }

}
