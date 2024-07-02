// Import statements should be removed
// import LoginPage from '../pages/LoginPage.cy.js';
// import InventoryPage from '../pages/InventoryPagec.cy.js';
// import CartPage from '../pages/CartPage.cy.js';
// import CheckoutPage from '../pages/CheckoutPage.cy.js';

describe('SauceDemo E2E Test', () => {
  beforeEach(() => {
    // Visit the URL and perform login
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('should add items to cart and complete checkout process', () => {
    // Example: Add items to cart
    cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
    cy.get('.inventory_item').eq(1).find('.btn_inventory').click();

    // Example: Verify items were added to cart
    cy.get('.shopping_cart_badge').should('have.text', '2');

    // Example: Go to cart and proceed to checkout
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();

    // Example: Fill out checkout information
    cy.get('[data-test=firstName]').type('John');
    cy.get('[data-test=lastName]').type('Doe');
    cy.get('[data-test=postalCode]').type('12345');
    cy.get('.cart_button').click();

    
    cy.get('.btn_action').click()
    //Example: Verify checkout is complete
    cy.url().should('include', 'checkout-complete');
    cy.get('.complete-header').should('be.visible');
  });
});