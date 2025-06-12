import signupPage from '@pages/signup.page';
import * as route from '@helper/route';
import * as data from '@data/signup.data'

describe('@automation Signup', () => {
    beforeEach(() => {
        route.visitWeb("/signup-flip");
    });

    it('should log in with valid credentials', () => {
        const { email, password } = data.VALID_SIGNUP_DATA;

        signupPage.fillEmail(email);
        signupPage.fillPassword(password);

        // Add assertions here to verify successful login
        cy.url().should('include', 'signup-flip'); // Adjust the URL as needed
    });
});