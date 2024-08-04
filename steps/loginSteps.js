import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../utilities/BrowserUtility.js";
import { PageManager } from "../globalPagesSetup.js";


Given("user is already on the login page", async function () {
  //await pageManager.loginPage.page.goto(pageManager.loginPage.libraryUrl);
  PageManager.page.goto(PageManager.loginPage.libraryUrl);
  // await BrowserUtility.sleep(2);
});

When("user enters valid username {string}", async function (userType) {
  if (("" + userType).toLowerCase() === "admin") {
    await PageManager.loginPage.enterUsername(
      PageManager.loginPage.adminUsername
    );
  } else {
    await PageManager.loginPage.enterUsername();
  }
  // await BrowserUtility.sleep(2);
});

When("user enters valid password {string}", async function (userType) {
  if (("" + userType).toLowerCase() === "admin") {
    await PageManager.loginPage.enterPassword(
      PageManager.loginPage.adminPassword
    );
  } else {
    await PageManager.loginPage.enterPassword();
  }
  // await BrowserUtility.sleep(2);
});

When("user clicks the login button", async function () {
  await PageManager.loginPage.clickLoginButton();
  // await BrowserUtility.sleep(2);
});

Then("user login successfully to the homepage", async function () {
  // verify the title is Library
  await expect(PageManager.page).toHaveTitle("Library");
  
  // await BrowserUtility.sleep(2);
});



// @lib-01-02
When('user enters invalid a {string} {string}', async function (username, userType) {
  if (("" + userType).toLowerCase() === "admin") {
    await PageManager.loginPage.enterUsername(username);
  } else {
    await PageManager.loginPage.enterUsername(username);
  }
});

When('user enters invalid {string} {string}', async function (password, userType) {
  await PageManager.loginPage.enterPassword(password);
  await BrowserUtility.sleep(2);
});

Then('user should see a {string} error pop-up message', async function (errorMessage) {
  await expect(PageManager.loginPage.loginErrorMessage).toBeVisible();
  await expect(PageManager.loginPage.loginErrorMessage).toHaveText(errorMessage);

  await BrowserUtility.verifyEqualMessages(errorMessage, await PageManager.loginPage.loginErrorMessage.innerText());

  await BrowserUtility.verifyMessages(errorMessage, await PageManager.loginPage.loginErrorMessage.innerText());

  // await BrowserUtility.sleep(2);
});




// @lib-01-03
When('user enter {string} {string}', async function (invalidPassword, userType) {
  await PageManager.loginPage.enterPassword(invalidPassword);
});

// @lib-01-04
When('user enters {string} {string}', async function (invalidUsername, userType) {
  await PageManager.loginPage.enterUsername(invalidUsername);
});



// @lib-01-05

When('user enters an invalid email address format {string}', async function (username) {
  await PageManager.loginPage.enterUsername(username);

});

// @lib-01-07
  When('user leaves the password field empty', async function () {
    await PageManager.loginPage.passwordInput.clear();
  });

  // @lib-01-08
  When('user leaves the username field empty', async function () {
    await PageManager.loginPage.usernameInput.clear();

  });