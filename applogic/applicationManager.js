const GitManager = require("../managers/gitManager");

class ApplicationManager {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.git = new GitManager(page);
  }
}

module.exports = ApplicationManager;
