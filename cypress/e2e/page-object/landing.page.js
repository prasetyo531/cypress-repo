class landingPage {
    visit() {
      cy.visit('/'); // Change this to your login URL
    }
  
    clickLoginRegister() {
      cy.xpath('(//*[text()="Login or register"])').click();
    }
  
    clickRegister() {
      cy.xpath('(//button[contains(@title,"Continue")])[1]').click();
    }
  
    fillUsername(username) {
      cy.xpath('(//input[contains(@id,"loginFrm_loginname")])[1]').type(username);
    }
  
    fillEmail(email) {
      cy.xpath('//input[@name="email"]').type(email);
    }
  
    fillPassword(password) {
      cy.xpath('//input[@name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    getErrorMessage() {
      return cy.get('.error-message');
    }
  }
  
  export default new landingPage();
  