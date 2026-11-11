
class LoginPage {

  constructor(page) {
    this.page = page;

    this.loginHeading = page.getByText(
      'Login to your account',
      { exact: true }
    );

    this.emailInput = page.locator(
      '[data-qa="login-email"]'
    );

    this.passwordInput = page.locator(
      '[data-qa="login-password"]'
    );

    this.loginButton = page.locator(
      '[data-qa="login-button"]'
    );

    this.errorMessage = page.getByText(
      'Your email or password is incorrect!',
      { exact: true }
    );

  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

}

module.exports = { LoginPage };
