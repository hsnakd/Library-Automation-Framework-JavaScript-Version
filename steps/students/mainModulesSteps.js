import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";
import { PageManager } from "../../globalPagesSetup.js";


// WRITE YOUR STEP DEFINITIONS HERE...

// @lib-05-01
// @lib-09-01
Then('user should see modules', async function (dataTable) {
    // Get the list of modules from the data table
    const modules = dataTable.rawTable.flat();

    // Loop through each module and check for its presence
    for (const module of modules) {
        console.log(`Checking module: ${module}`);
        const moduleLocator = PageManager.dashboardPage.getModuleLocator(module);
        await expect(moduleLocator).toBeVisible();
    }
});