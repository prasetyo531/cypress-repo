class signupPage {
  visit() {
    cy.visit('/'); // Change this to your login URL
  }

  clickJoin() {
    cy.xpath('//a[@href="/signup"]').click();
  }

  fillUsername(username) {
    cy.xpath('//input[@name="name"]').type(username); // Adjust the selector as needed
  }

  fillEmail(email) {
    cy.xpath('//input[@name="email"]').type(email); // Adjust the selector as needed
  }

  fillPassword(password) {
    cy.xpath('//input[@name="password"]').type(password); // Adjust the selector as needed
  }

  submit() {
    cy.get('button[type="submit"]').click(); // Adjust the selector as needed
  }

  getErrorMessage() {
    return cy.get('.error-message'); // Adjust the selector as needed
  }
}

export default new signupPage();
