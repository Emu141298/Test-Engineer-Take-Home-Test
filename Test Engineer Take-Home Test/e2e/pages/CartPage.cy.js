

class CartPage {
    verifyCartItem(itemName) {
      cy.get('.cart_list')
        .contains('.cart_item', itemName)
        .should('exist');
    }
  
    checkout() {
      cy.get('.checkout_button').click();
    }
  }
  
  export default CartPage;