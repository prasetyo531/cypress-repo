import signupPage from '@pages/signup.page';

describe('Signup Coursera', () => {
    beforeEach(() => {
        signupPage.visit();
    });

    it('should log in with valid credentials', () => {
        signupPage.clickJoin();
        signupPage.fillPassword('validPassword');
        signupPage.submit();

        // Add assertions here to verify successful login
        cy.url().should('include', '/dashboard'); // Adjust the URL as needed
    });
});