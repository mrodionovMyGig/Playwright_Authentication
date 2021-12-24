require('dotenv').config();

const config = {
  globalSetup: require.resolve('./global-setup'),
  projects: [
    {
      name: 'GIT_chrome',
      testDir: 'tests/git',
      use: {headless: true, storageState: 'common/storageStateGIT.json', devices: ['Desktop Chrome'] },
    },
    {
      name: 'GIT_firefox',
      testDir: 'tests/git',
      use: {headless: true, storageState: 'common/storageStateGIT.json', devices: ['Desktop Firefox'] },
    },
  ],
};

module.exports = config;
