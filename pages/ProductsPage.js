
class ProductsPage {

  constructor(page) {
    this.page = page;

    this.allProductsHeading = page.getByRole(
      'heading',
      { name: 'All Products', exact: true }
    );

    this.searchInput = page.locator('#search_product');

    this.searchButton = page.locator('#submit_search');

    this.searchedProductsHeading = page.getByRole(
      'heading',
      { name: 'Searched Products', exact: true }
    );

    this.productCards = page.locator(
      '.features_items .product-image-wrapper'
    );

  }

  async searchProduct(name) {
    await this.searchInput.fill(name);
    await this.searchButton.click();
  }

  async getProductCount() {
    return await this.productCards.count();
  }

  async openFirstProduct() {

    const product = this.productCards.first();

    await product.getByRole(
      'link',
      { name: /view product/i }
    ).click();

  }

  async setQuantity(quantity) {
    await this.page.locator('#quantity').fill(
      String(quantity)
    );
  }

  async addProductToCart() {
    await this.page.locator('button.cart').click();
  }

}

module.exports = { ProductsPage };
