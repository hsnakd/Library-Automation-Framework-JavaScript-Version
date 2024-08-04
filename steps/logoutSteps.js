import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// Step Definitions
Given('user logs in as {string}', async function (userType) {
  // Go to the login page
  await PageManager.page.goto(PageManager.loginPage.libraryUrl);

  // Enter username
  if (userType.toLowerCase() === "admin") {
    await PageManager.loginPage.enterUsername(PageManager.loginPage.adminUsername);
  } else {
    await PageManager.loginPage.enterUsername(PageManager.loginPage.studentUsername); 
  }

  // Enter password
  if (userType.toLowerCase() === "admin") {
    await PageManager.loginPage.enterPassword(PageManager.loginPage.adminPassword);
  } else {
    await PageManager.loginPage.enterPassword(PageManager.loginPage.studentPassword); 
  }

  // Click login button
  await PageManager.loginPage.clickLoginButton();

  // verify the title is Library
  await expect(PageManager.page).toHaveTitle("Library");
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

