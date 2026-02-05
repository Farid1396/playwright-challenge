import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../data/users';

test.describe('Login flow', () => {

  test('User logs in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.open();
    await loginPage.login(users.standard);

    await productsPage.verifyPageIsDisplayed();
  });

  test('Invalid user cannot login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(users.invalid);

    await loginPage.verifyErrorIsDisplayed();
  });

});
