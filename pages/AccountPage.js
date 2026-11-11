
class AccountPage {

  constructor(page) {
    this.page = page;

    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');

    this.gender = page.locator('#id_gender1');
    this.password = page.locator('#password');

    this.day = page.locator('#days');
    this.month = page.locator('#months');
    this.year = page.locator('#years');

    this.firstName = page.locator('[data-qa="first_name"]');
    this.lastName = page.locator('[data-qa="last_name"]');
    this.company = page.locator('[data-qa="company"]');
    this.address = page.locator('[data-qa="address"]');

    this.country = page.locator('[data-qa="country"]');
    this.state = page.locator('[data-qa="state"]');
    this.city = page.locator('[data-qa="city"]');
    this.zipcode = page.locator('[data-qa="zipcode"]');
    this.mobile = page.locator('[data-qa="mobile_number"]');

    this.createAccountButton = page.locator(
      '[data-qa="create-account"]'
    );

    this.accountCreated = page.getByText(
      'Account Created!',
      { exact: true }
    );

    this.continueButton = page.locator(
      '[data-qa="continue-button"]'
    );

    this.accountDeleted = page.getByText(
      'Account Deleted!',
      { exact: true }
    );

  }

  async register(user) {

    await this.signupName.fill(user.name);
    await this.signupEmail.fill(user.email);

    await this.signupButton.click();

    await this.gender.check();
    await this.password.fill(user.password);

    await this.day.selectOption(user.day);
    await this.month.selectOption(user.month);
    await this.year.selectOption(user.year);

    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.company.fill(user.company);
    await this.address.fill(user.address);

    await this.country.selectOption({
      label: user.country
    });

    await this.state.fill(user.state);
    await this.city.fill(user.city);
    await this.zipcode.fill(user.zipcode);
    await this.mobile.fill(user.mobile);

    await this.createAccountButton.click();

  }

  async continueAfterRegistration() {
    await this.continueButton.click();
  }

  async deleteAccount() {
    await this.page.locator(
      'a[href="/delete_account"]'
    ).click();
  }

}

module.exports = { AccountPage };
