import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../data/users';

test.describe('Flujo de inicio de sesión', () => {

  test('El usuario inicia sesión con credenciales válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.open();
    await loginPage.login(users.standard);

    await productsPage.verifyPageIsDisplayed();
  });

  test('El usuario no válido no puede iniciar sesión', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(users.invalid);

    await loginPage.verifyErrorIsDisplayed();
  });

});
