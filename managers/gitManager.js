const {MainPage} = require('../applogic/pages/git/mainPage');

class GitManager {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.main = new MainPage(page);
  }
}

module.exports = GitManager;
