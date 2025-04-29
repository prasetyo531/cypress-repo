class signupPage {
  visit() {
    cy.visit("/"); // Change this to your login URL
  }

  clickJoin() {
    cy.xpath('//a[contains(text(), "Join for Free")]').click();
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username); // Adjust the selector as needed
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password); // Adjust the selector as needed
  }

  submit() {
    cy.get('button[type="submit"]').click(); // Adjust the selector as needed
  }

  getErrorMessage() {
    return cy.get(".error-message"); // Adjust the selector as needed
  }
}

export default new signupPage();
