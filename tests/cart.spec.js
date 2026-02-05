import { test } from './fixtures/auth.fixture';
import { allure } from 'allure-playwright';
import { ProductsPage } from '../pages/ProductsPage';
import { products } from '../data/products';

test.describe.parallel('Cart flow', () => {

  test.describe('Smoke', () => {

    test('Add backpack to cart', async ({ loggedPage }) => {
      const productsPage = new ProductsPage(loggedPage);

      await productsPage.verifyPageIsDisplayed();
      await productsPage.addProduct(products.backpack);
      await productsPage.verifyCartCount(1);
      await productsPage.logout();
    });

  });

  test('Add backpack to cart2', async ({ loggedPage }) => {
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
      test(`Add ${product.name} to cart`, async ({ loggedPage }) => {
        const productsPage = new ProductsPage(loggedPage);

        await productsPage.verifyPageIsDisplayed();
        await productsPage.addProduct(product);
        await productsPage.verifyCartCount(1);
        await productsPage.logout();
      });
    });

  });

});
