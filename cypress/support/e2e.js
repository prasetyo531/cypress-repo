// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

require('cypress-xpath');

// Import commands.js using ES2015 syntax:
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
    // You can log the error to the console for debugging
    console.error('Uncaught exception:', err);
  
    // Return false to prevent Cypress from failing the test
    // You can add conditions to filter specific errors
    if (err.message.includes('specific error message')) {
      return false; // Prevent failing the test for this specific error
    }
  
    // Return true to let Cypress fail the test for other errors
    return true;
  });
  