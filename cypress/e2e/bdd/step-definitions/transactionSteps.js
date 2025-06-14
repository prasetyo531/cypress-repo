import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';

Given('User on the transaction page', () => {
  cy.visit(`${Cypress.env('base_url')}/transaction`);
});

When('User choose send money domestic', () => {
  cy.get('[data-qaid="qa-multi-input-method"]').click();
});

Then('User will see send money domestic menu', () => {
  cy.url().should('include', 'transaction/multi-input'); 
});