import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// @lib-02-01
Given('user is already logged in as {string}', async function (user_type) {
  await PageManager.loginPage.login(user_type);
});

When('user clicks the account name on the top right corner of the page', async function () {
  await PageManager.dashboardPage.userProfileImage.click();
});

When('user clicks the logout button under the account name', async function () {
  await PageManager.dashboardPage.logoutButton.click();
});

Then('user should be able to log out from the application', async function () {
  await expect(PageManager.page).toHaveTitle("Login - Library");
});

