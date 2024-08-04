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
});

When('user clicks the {string} button under the account name', async function (buttonName) {
//   await PageManager.homePage.clickLogoutButton();
});

Then('user is redirected to the login page with the title {string}', async function (expectedTitle) {
//   const actualTitle = await PageManager.page.title();
//   expect(actualTitle).toBe(expectedTitle);
});
