import { BasePage } from "./BasePage.js";

export class UsersPage extends BasePage {
  constructor(page) {
    super(page);
    this.userGroupDropDown = page.locator("#user_groups");
    this.userGroupOptions = this.userGroupDropDown.locator("option");
  }

  async isUserGroupDropdownDisplayed() {
    return this.userGroupDropDown.isVisible();
  }

  async isOptionSelectedByDefault(option) {
    const selectedOption = await this.userGroupDropDown.locator("option[selected]").textContent();
    return selectedOption === option;
  }

  async getUserGroupOptions() {
    const options = await this.userGroupOptions.allTextContents();
    return options.map(option => option.trim());
  }

  async areAllColumnsGroup(group) {
    const columns = await this.page.locator('.group-column').allTextContents();
    return columns.every(column => column === group);
  }
}
