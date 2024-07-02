class InventoryPage {
    addToCart(itemName) {
      cy.contains('.inventory_item_name', itemName)
        .siblings('.pricebar')
        .children('.btn_inventory')
        .click();
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').click();
    }
  }
  
  export default InventoryPage;