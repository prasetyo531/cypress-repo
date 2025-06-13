const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  projectId: '13935p',
  viewportWidth: 1200,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportPageTitle: "Automated Test Status",
    reportTitle: "Automated Test Reporting Dashboard",
    showPassed: "true",
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    retries: {
      runMode: 1, // Number of retries when running from terminal
      openMode: 0, // Number of retries when running in the cypress Test Runner
    },
  },
  e2e: {
    env: {
      base_url: "https://bigflip-staging-c.flip.id",
      api_base_url: process.env.BASE_API_URL
    },
    setupNodeEvents(on) {
      const options = {
        // Adjust the path to your webpack.config.js
        webpackOptions: require("../cypress-repo/webpack.config.js"),
        watchOptions: {},
      };
      on("file:preprocessor", webpackPreprocessor(options));
    },
    specPattern: "cypress/e2e/scenarios/**/*.{js,ts}",
    fixturesFolder: "cypress/e2e/fixtures",
  }
});
