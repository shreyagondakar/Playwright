
const { test, expect } = require('../fixtures/test-fixtures');

test.describe('Shopping Cart Tests', () => {

  test('TC_UI_012 - Verify empty cart',
    async ({ page, homePage }) => {

      await homePage.navigate();

      await homePage.openCart();

      await expect(page).toHaveURL(/\/view_cart/);

      await expect(
        page.getByText(/cart is empty/i)
      ).toBeVisible();

    });

  test('TC_UI_013 - Add product to cart',
    async ({ page, homePage, cartPage }) => {

      await homePage.navigate();

      await homePage.openProducts();

      const product = page.locator(
        '.features_items .product-image-wrapper'
      ).first();

      await product.hover();

      await product.getByText(
        'Add to cart',
        { exact: true }
      ).click();

      await expect(
        page.locator('.modal-content')
      ).toBeVisible();

      await page.getByRole(
        'link',
        { name: 'View Cart' }
      ).click();

      await expect(cartPage.cartRows).toHaveCount(1);

    });

  test('TC_UI_014 - Verify product quantity',
    async ({ page, homePage, productsPage, cartPage }) => {

      await homePage.navigate();

      await homePage.openProducts();

      await productsPage.openFirstProduct();

      await productsPage.setQuantity(3);

      await productsPage.addProductToCart();

      await page.getByRole(
        'link',
        { name: 'View Cart' }
      ).click();

      await expect(cartPage.cartRows).toHaveCount(1);

      const quantity =
        await cartPage.getFirstProductQuantity();

      expect(quantity.trim()).toBe('3');

    });

  test('TC_UI_015 - Remove product from cart',
    async ({ page, homePage, cartPage }) => {

      await homePage.navigate();

      await homePage.openProducts();

      const product = page.locator(
        '.features_items .product-image-wrapper'
      ).first();

      await product.hover();

      await product.getByText(
        'Add to cart',
        { exact: true }
      ).click();

      await page.getByRole(
        'button',
        { name: /continue shopping/i }
      ).click();

      await homePage.openCart();

      await expect(cartPage.cartRows).toHaveCount(1);

      await cartPage.removeFirstProduct();

      await expect(
        page.getByText(/cart is empty/i)
      ).toBeVisible();

    });

});
