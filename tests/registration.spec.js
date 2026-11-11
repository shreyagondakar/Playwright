
const { test, expect } = require('../fixtures/test-fixtures');

const { generateUser } = require('../utils/test-data');

test.describe('Registration Tests', () => {

  test('TC_UI_003 - Register a new user and delete account',
    async ({ page, homePage, accountPage }) => {

      const user = generateUser();

      await homePage.navigate();

      await homePage.openLogin();

      await accountPage.register(user);

      await expect(
        accountPage.accountCreated
      ).toBeVisible();

      await accountPage.continueAfterRegistration();

      await expect(
        page.getByText(`Logged in as ${user.name}`)
      ).toBeVisible();

      await accountPage.deleteAccount();

      await expect(
        accountPage.accountDeleted
      ).toBeVisible();

    });

});
