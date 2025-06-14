import * as route from '@helper/route';

describe('@automation Dashboard test after login', () => {
    beforeEach(() => {
      route.visitWeb('/transaction');
      cy.loginAndSetToken().then(() => {
        route.visitWeb('/transaction');
      });
    });
  
    it('should show dashboard content', () => {
        cy.url().should('include', 'transaction'); // Adjust the URL as needed
    });
  });