import signupPage from '@pages/signup.page';

describe('Signup Coursera', () => {
    beforeEach(() => {
        signupPage.visit();
    });

    it('should log in with valid credentials', () => {
        signupPage.clickJoin();
        signupPage.fillUsername('wadidaw');
        signupPage.fillEmail('geekmedium@gmail.com');
        signupPage.fillPassword('Cypres123!');
        signupPage.submit();

        // Add assertions here to verify successful login
        cy.url().should('include', 'authMode=signup'); // Adjust the URL as needed
    });
});