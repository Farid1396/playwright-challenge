import { test } from './fixtures/auth.fixture';
import { allure } from 'allure-playwright';
import { ProductsPage } from '../pages/ProductsPage';
import { products } from '../data/products';

test.describe.parallel('Flujo del carrito', () => {

  test.describe('Smoke', () => {

    test('Añadir mochila al carrito', async ({ loggedPage }) => {
      const productsPage = new ProductsPage(loggedPage);

      await productsPage.verifyPageIsDisplayed();
      await productsPage.addProduct(products.backpack);
      await productsPage.verifyCartCount(1);
      await productsPage.logout();
    });

  });

  test('Añadir otra mochila al carrito', async ({ loggedPage }) => {
    allure.feature('Cart');
    allure.story('Add product');
    allure.severity('critical');

    const productsPage = new ProductsPage(loggedPage);

    await productsPage.verifyPageIsDisplayed();
    await productsPage.addProduct(products.backpack);
    await productsPage.verifyCartCount(1);
    await productsPage.logout();
  });

  test.describe('Regression', () => {

    Object.values(products).forEach(product => {
      test(`Agregar ${product.name} al carrito`, async ({ loggedPage }) => {
        const productsPage = new ProductsPage(loggedPage);

        await productsPage.verifyPageIsDisplayed();
        await productsPage.addProduct(product);
        await productsPage.verifyCartCount(1);
        await productsPage.logout();
      });
    });

  });

});
