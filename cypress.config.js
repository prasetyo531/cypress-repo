const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.coursera.org/',
    viewportWidth: 1200,
    viewportHeight: 800,
    reporter: 'mochawesome',
    reporterOptions: {
      reportPageTitle: "Automated Test Status",
      reportTitle: "Automated Test Reporting Dashboard",
      showPassed: "true",
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
  },
    setupNodeEvents(on, config) {
      const options = {
        // Adjust the path to your webpack.config.js
        webpackOptions: require('../cypress-repo/webpack.config.js'), // Change this line
        watchOptions: {},
      };
      on('file:preprocessor', webpackPreprocessor(options));
    },
    specPattern: 'cypress/e2e/scenarios/**/*.{js,ts}', // Adjust the pattern if needed
    fixturesFolder: 'cypress/e2e/fixtures', // Update the path if you have fixtures
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
});
