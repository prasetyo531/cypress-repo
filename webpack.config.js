const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, './cypress/e2e/tests/data'),
      '@pages': path.resolve(__dirname, './cypress/e2e/tests/page-object'),
      '@fixtures': path.resolve(__dirname, './cypress/e2e/tests/fixtures'),
      '@helper': path.resolve(__dirname, './cypress/e2e/tests/helper'),
      '@const': path.resolve(__dirname, './cypress/e2e/tests/const'),
    },
  },
};