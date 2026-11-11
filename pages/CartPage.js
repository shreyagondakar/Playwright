
class CartPage {

  constructor(page) {
    this.page = page;

    this.cartRows = page.locator(
      '#cart_info_table tbody tr'
    );

    this.proceedToCheckout = page.getByRole(
      'link',
      { name: /proceed to checkout/i }
    );

  }

  async getCartCount() {
    return await this.cartRows.count();
  }

  async getFirstProductQuantity() {
    return await this.cartRows.first()
      .locator('.cart_quantity button')
      .innerText();
  }

  async removeFirstProduct() {
    await this.cartRows.first()
      .locator('.cart_quantity_delete')
      .click();
  }

  async proceedToCheckoutPage() {
    await this.proceedToCheckout.click();
  }

}

module.exports = { CartPage };
