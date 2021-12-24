require('dotenv').config();

const config = {
  globalSetup: require.resolve('./global-setup'),
  projects: [
    {
      name: 'GIT',
      testDir: 'tests/git',
      use: {headless: true, storageState: 'common/storageStateGIT.json'},
    },
  ],
};

module.exports = config;
