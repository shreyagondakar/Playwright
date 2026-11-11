
const { test, expect } = require('../fixtures/test-fixtures');

const { users, generateUser } = require('../utils/test-data');

test.describe('Login Tests', () => {

  test.beforeEach(async ({ homePage }) => {

    await homePage.navigate();

    await homePage.openLogin();

  });

  test('TC_UI_004 - Verify login page elements',
    async ({ loginPage }) => {

      await expect(loginPage.loginHeading).toBeVisible();

      await expect(loginPage.emailInput).toBeVisible();

      await expect(loginPage.passwordInput).toBeVisible();

      await expect(loginPage.loginButton).toBeVisible();

    });

  test('TC_UI_005 - Invalid login',
    async ({ loginPage }) => {

      await loginPage.login(
        users.invalidUser.email,
        users.invalidUser.password
      );

      await expect(
        loginPage.errorMessage
      ).toBeVisible();

    });

  test('TC_UI_006 - Empty login validation',
    async ({ loginPage }) => {

      await loginPage.login('', '');

      await expect(
        loginPage.emailInput
      ).toBeVisible();

      await expect(
        loginPage.loginHeading
      ).toBeVisible();

    });

  test('TC_UI_007 - Positive login and logout',
    async ({ page, homePage, loginPage, accountPage }) => {

      const user = generateUser();

      // Register account
      await accountPage.register(user);

      await expect(
        accountPage.accountCreated
      ).toBeVisible();

      await accountPage.continueAfterRegistration();

      // Logout
      await page.locator('a[href="/logout"]').click();

      // Login again
      await homePage.openLogin();

      await loginPage.login(
        user.email,
        user.password
      );

      await expect(
        page.getByText(`Logged in as ${user.name}`)
      ).toBeVisible();

      // Cleanup
      await accountPage.deleteAccount();

      await expect(
        accountPage.accountDeleted
      ).toBeVisible();

    });

});
