
class CheckoutPage {
    fillCheckoutInformation(firstName, lastName, postalCode) {
      cy.get('#first-name').type(firstName);
      cy.get('#last-name').type(lastName);
      cy.get('#postal-code').type(postalCode);
    }
  
    completeCheckout() {
      cy.get('.cart_button').click();
    }
  
    verifyCheckoutComplete() {
      cy.contains('THANK YOU FOR YOUR ORDER').should('exist');
    }
  }
  
  export default CheckoutPage;