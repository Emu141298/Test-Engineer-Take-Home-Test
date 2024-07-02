


class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/v1/');
    }
  
    fillUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submitLogin() {
      cy.get('#login-button').click();
    }
  }
  
  export default LoginPage;