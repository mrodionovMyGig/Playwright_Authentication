const {test, expect} = require('@playwright/test');
const ApplicationManager = require("../../applogic/applicationManager");

test('Search from main page', async ({page}) => {
    const app = new ApplicationManager(page);
    await app.git.main.gotoMainPage();
    await app.git.main.searchMainPage('sweeroll');
    await app.git.main.selectUsersResult();
    await app.git.main.clickOnResult(page, 'Максим Родионов sweeroll');
    await expect(page).toHaveURL('https://github.com/sweeroll');
});