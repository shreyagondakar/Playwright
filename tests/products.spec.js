
const { test, expect } = require('../fixtures/test-fixtures');

const { products } = require('../utils/test-data');

test.describe('Product Tests', () => {

  test.beforeEach(async ({ homePage, productsPage }) => {

    await homePage.navigate();

    await homePage.openProducts();

    await expect(
      productsPage.allProductsHeading
    ).toBeVisible();

  });

  test('TC_UI_008 - Verify product listing',
    async ({ productsPage }) => {

      const count = await productsPage.getProductCount();

      expect(count).toBeGreaterThan(0);

    });

  for (const product of products.searchProducts) {

    test(`TC_UI_009 - Search product ${product}`,
      async ({ productsPage }) => {

        await productsPage.searchProduct(product);

        await expect(
          productsPage.searchedProductsHeading
        ).toBeVisible();

        const count = await productsPage.getProductCount();

        expect(count).toBeGreaterThan(0);

      });

  }

  test('TC_UI_010 - Search invalid product',
    async ({ productsPage }) => {

      await productsPage.searchProduct(
        products.invalidProduct
      );

      await expect(
        productsPage.searchedProductsHeading
      ).toBeVisible();

      const count = await productsPage.getProductCount();

      expect(count).toBe(0);

    });

  test('TC_UI_011 - View product details',
    async ({ page, productsPage }) => {

      await productsPage.openFirstProduct();

      await expect(page).toHaveURL(
        /\/product_details\/\d+/
      );

      await expect(
        page.locator('.product-information')
      ).toBeVisible();

    });

});
