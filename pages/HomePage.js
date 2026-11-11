
class HomePage {

  constructor(page) {
    this.page = page;

    this.logo = page.locator('a[href="/"] img');

    this.productsLink = page.locator('a[href="/products"]');

    this.loginLink = page.locator('a[href="/login"]');

    this.cartLink = page.locator('a[href="/view_cart"]');

  }

  async navigate() {
    await this.page.goto('/');
  }

  async openProducts() {
    await this.productsLink.click();
  }

  async openLogin() {
    await this.loginLink.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

}

module.exports = { HomePage };
