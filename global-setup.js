const {chromium} = require('@playwright/test');

module.exports = async () => {
  await loginGithub(process.env.GIT_EMAIL, process.env.GIT_PASSWORD);
};

async function loginGithub(email, password) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await browser.newPage();
  await page.goto(process.env.GIT_URL + "login");
  await page.fill('input[name="login"]', `${email}`);
  await page.fill('input[name="password"]', `${password}`);
  await page.click('input:has-text("Sign in")');
  await page.context().storageState({path: 'common/storageStateGIT.json'});
  await context.close();
  await browser.close();
}
