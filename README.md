# Test-Engineer-Take-Home-Test
Test Engineer Take-Home Test  Role: Test Engineer

Cypress Project with Allure Reporting
This project demonstrates end-to-end testing for the SauceDemo website using Cypress and Allure for test reporting.

Prerequisites
Ensure you have the following installed on your system:

Node.js (>=12.x)
npm (>=6.x)
Java Development Kit (JDK) (Ensure JAVA_HOME is set correctly)
Project Setup
Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/cypress-project.git
cd cypress-project
Install dependencies:

sh
Copy code
npm install
Running Tests
Run Cypress tests:

sh
Copy code
npm run cypress:run
This will execute the Cypress tests and generate test results.

Generate Allure report:

sh
Copy code
npm run allure:generate
This command generates an Allure report based on the test results.

Open Allure report:

sh
Copy code
npm run allure:open
This will open the Allure report in your default web browser.

Setting Up Environment Variables
Set JAVA_HOME:

Ensure that JAVA_HOME is set to the correct directory of your JDK installation.

On Windows:

Right-click This PC and select Properties.
Click on Advanced system settings.
Click on Environment Variables.
Under System variables, click New and add:
Variable name: JAVA_HOME
Variable value: C:\Program Files\Java\jdk-<version>
Project Structure
plaintext
Copy code
cypress-project/
├── cypress/
│   ├── e2e/
│   │   ├── saucedemoTest.cy.js
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
├── reports/
│   ├── allure-results/
│   ├── allure-report/
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
Example Test Case
Here is an example test case demonstrating how to log in, add items to the cart, and complete the checkout process:

javascript
Copy code
// cypress/e2e/saucedemoTest.cy.js

import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('SauceDemo E2E Test', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('should log in, add items to cart, and complete checkout', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    
    // Login
    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();

    // Add items to cart
    inventoryPage.addItemToCart('Sauce Labs Backpack');
    inventoryPage.addItemToCart('Sauce Labs Bike Light');
    inventoryPage.clickCart();

    // Verify items in cart
    cartPage.verifyItemInCart('Sauce Labs Backpack');
    cartPage.verifyItemInCart('Sauce Labs Bike Light');
    cartPage.clickCheckout();

    // Complete checkout
    checkoutPage.enterFirstName('John');
    checkoutPage.enterLastName('Doe');
    checkoutPage.enterPostalCode('12345');
    checkoutPage.clickContinue();
    checkoutPage.clickFinish();

    // Verify checkout complete
    checkoutPage.verifyCheckoutComplete();
  });
});
Additional Notes
Ensure that your JAVA_HOME is correctly set if you encounter issues related to Java.
The package.json is configured to use Allure for reporting. You can modify the configuration based on your preferences.

