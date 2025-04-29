const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './cypress/e2e/pages-object'),
      '@fixtures': path.resolve(__dirname, './cypress/e2e/fixtures'),
    },
  },
};