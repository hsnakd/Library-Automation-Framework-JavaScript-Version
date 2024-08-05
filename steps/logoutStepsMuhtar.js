import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// Step Definitions

Given('user is already logged in as a {string}', async function (user_type) {
  await PageManager.loginPage.login(user_type);
});

When('user clicks the user profile on the top right corner of the page', async function () {
  await PageManager.dashboardPage.userProfileImage.click();

});

When('user clicks the Log out button', async function () {
  await PageManager.dashboardPage.logoutButton.click();

});

Then('user should be able to log out from the app', async function () {
  await expect(PageManager.page).toHaveTitle("Login - Library");
});