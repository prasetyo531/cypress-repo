const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/bdd/features/**/*.feature',
    env: {
      base_url: 'https://bigflip-staging-c.flip.id',
      api_base_url: process.env.BASE_API_URL,
    },
  },
});