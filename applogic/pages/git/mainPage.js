const URL = process.env.GIT_URL;

exports.MainPage = class MainPage {
  constructor(page) {
    this.page = page;
    this.searchBarLocator = page.locator('[placeholder="Search or jump to…"]');
    this.usersResultLocator = page.locator('text=Users1 >> span >> nth=0');
  }

  async gotoMainPage() {
    await this.page.goto(`${URL}`);
    await this.page.waitForLoadState('networkidle');
  }

  async searchMainPage(text) {
    await this.searchBarLocator.fill(`${text}`);
    await this.searchBarLocator.press("Enter");
  }

  async selectUsersResult() {
    await Promise.all([
      await this.page.waitForLoadState('networkidle'),
      this.usersResultLocator.click('text=Users1 >> span')
    ]);

    await this.usersResultLocator.click();
  }

  async clickOnResult(page, text) {
    await page.locator(`text=${text}`).click();
  }
};
