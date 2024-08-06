import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PageManager } from "../../globalPagesSetup.js";

// @lib-07-01
Then('the User Group dropdown should be displayed', async function () {
  const isDisplayed = await PageManager.usersPage.isUserGroupDropdownDisplayed();
  expect(isDisplayed).toBe(true);
});

Then('the {string} option should be selected by default', async function (option) {
  const isSelected = await PageManager.usersPage.isOptionSelectedByDefault(option);
  expect(isSelected).toBe(true);
});

Then('the User Group dropdown menu has the following options:', async function (dataTable) {
  const expectedOptions = dataTable.raw().flat();
  const actualOptions = await PageManager.usersPage.getUserGroupOptions();
  expect(actualOptions).toEqual(expectedOptions);
});


       
Then('all group columns should have the value of {string} after filtering by {string}', async function (group, string) {
    const areAllColumnsCorrect = await PageManager.usersPage.areAllColumnsGroup(group);
    expect(areAllColumnsCorrect).toBe(true);
  });