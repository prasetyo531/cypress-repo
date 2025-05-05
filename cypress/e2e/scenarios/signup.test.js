import signupPage from '@pages/signup.page';
import * as data from '@data/signup.data'

describe('@automation Signup Coursera', () => {
    beforeEach(() => {
        signupPage.visit();
    });

    it('should log in with valid credentials', () => {
        const { username, email, password } = data.VALID_SIGNUP_DATA;

        signupPage.clickJoin();
        signupPage.fillUsername(username);
        signupPage.fillEmail(email);
        signupPage.fillPassword(password);
        signupPage.submit();

        // Add assertions here to verify successful login
        cy.url().should('include', 'authMode=signup'); // Adjust the URL as needed
    });
});