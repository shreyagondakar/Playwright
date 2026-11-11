
const { test, expect } = require('../fixtures/test-fixtures');

test.describe('Homepage Tests', () => {

  test('TC_UI_001 - Verify homepage loads',
    async ({ page, homePage }) => {

      await homePage.navigate();

      await expect(page).toHaveTitle(/Automation Exercise/);

      await expect(homePage.productsLink).toBeVisible();

      await expect(homePage.loginLink).toBeVisible();

      await expect(homePage.cartLink).toBeVisible();

    });

  test('TC_UI_002 - Navigate to products',
    async ({ page, homePage, productsPage }) => {

      await homePage.navigate();

      await homePage.openProducts();

      await expect(page).toHaveURL(/\/products/);

      await expect(
        productsPage.allProductsHeading
      ).toBeVisible();

    });

});
