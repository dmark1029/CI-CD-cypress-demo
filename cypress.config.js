const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
  },
});
