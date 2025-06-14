import signupPage from '@pages/signup.page';
import * as data from '@data/signup.data';
import * as route from '@helper/route';

describe('@automation Signup', () => {
    beforeEach(() => {
        route.visitWeb("/");
    });

    it('should log in with valid credentials', () => {
        const { username, email, password } = data.VALID_SIGNUP_DATA;

        signupPage.clickJoin();
        signupPage.fillUsername(username);
        signupPage.fillEmail(email);
        signupPage.fillPassword(password);
        signupPage.submit();

        // Add assertions here to verify successful login
        cy.url().should('include', 'signup'); // Adjust the URL as needed
    });
});