const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, './cypress/e2e/data'),
      '@pages': path.resolve(__dirname, './cypress/e2e/page-object'),
      '@fixtures': path.resolve(__dirname, './cypress/e2e/fixtures'),
      '@helper': path.resolve(__dirname, './cypress/e2e/helper'),
      '@const': path.resolve(__dirname, './cypress/e2e/const'),
    },
  },
};