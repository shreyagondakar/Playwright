
const { test, expect } = require('../fixtures/test-fixtures');

const scenarios = require('../test-data/search-scenarios.json');

test.describe('Data Driven Product Search', () => {

  for (const scenario of scenarios) {

    test(`Search scenario: ${scenario.keyword}`,
      async ({ homePage, productsPage }) => {

        await homePage.navigate();

        await homePage.openProducts();

        await productsPage.searchProduct(
          scenario.keyword
        );

        await expect(
          productsPage.searchedProductsHeading
        ).toBeVisible();

        const count = await productsPage.getProductCount();

        if (scenario.expectedResults) {
          expect(count).toBeGreaterThan(0);
        } else {
          expect(count).toBe(0);
        }

      });

  }

});
