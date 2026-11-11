
const { test, expect } = require('../fixtures/test-fixtures');

const { generateUser } = require('../utils/test-data');

const payment = require('../test-data/payment.json');

test.describe('Checkout Tests', () => {

  test('TC_UI_016 - Complete end-to-end checkout',
    async ({
      page,
      homePage,
      accountPage,
      productsPage,
      cartPage,
      checkoutPage
    }) => {

      const user = generateUser();

      // 1. Register a new user
      await homePage.navigate();

      await homePage.openLogin();

      await accountPage.register(user);

      await expect(
        accountPage.accountCreated
      ).toBeVisible();

      await accountPage.continueAfterRegistration();

      // 2. Navigate to products
      await homePage.openProducts();

      // 3. Select product
      await productsPage.openFirstProduct();

      await productsPage.setQuantity(1);

      await productsPage.addProductToCart();

      // 4. Open cart
      await page.getByRole(
        'link',
        { name: 'View Cart' }
      ).click();

      await expect(
        cartPage.cartRows
      ).toHaveCount(1);

      // 5. Proceed to checkout
      await cartPage.proceedToCheckoutPage();

      await checkoutPage.verifyCheckoutDetails();

      // 6. Place order
      await checkoutPage.placeOrder();

      // 7. Enter payment details
      await checkoutPage.makePayment(payment.testCard);

      // 8. Verify order confirmation
      await expect(
        page.getByText('Order Placed!', {
          exact: false
        })
      ).toBeVisible();

      // 9. Delete test account
      await accountPage.deleteAccount();

      await expect(
        accountPage.accountDeleted
      ).toBeVisible();

    });

});
