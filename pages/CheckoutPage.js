
class CheckoutPage {

  constructor(page) {
    this.page = page;

    this.addressDetails = page.getByText(
      'Address Details',
      { exact: true }
    );

    this.reviewYourOrder = page.getByText(
      'Review Your Order',
      { exact: true }
    );

    this.commentBox = page.locator(
      'textarea[name="message"]'
    );

    this.placeOrderButton = page.getByRole(
      'link',
      { name: /place order/i }
    );

    this.cardName = page.locator(
      'input[name="name_on_card"]'
    );

    this.cardNumber = page.locator(
      'input[name="card_number"]'
    );

    this.cvc = page.locator('input[name="cvc"]');

    this.expiryMonth = page.locator(
      'input[name="expiry_month"]'
    );

    this.expiryYear = page.locator(
      'input[name="expiry_year"]'
    );

    this.payButton = page.locator('#submit');

  }

  async verifyCheckoutDetails() {
    await this.addressDetails.waitFor({
      state: 'visible'
    });

    await this.reviewYourOrder.waitFor({
      state: 'visible'
    });
  }

  async placeOrder() {
    await this.commentBox.fill(
      'Playwright automation test order'
    );

    await this.placeOrderButton.click();
  }

  async makePayment(payment) {

    await this.cardName.fill(payment.name);
    await this.cardNumber.fill(payment.number);
    await this.cvc.fill(payment.cvc);
    await this.expiryMonth.fill(payment.month);
    await this.expiryYear.fill(payment.year);

    await this.payButton.click();

  }

}

module.exports = { CheckoutPage };
