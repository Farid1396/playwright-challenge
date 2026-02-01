//import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { BASE_URL, STANDARD_USER } from '../../config/env.js';
import { users } from '../data/users.js';

Given('the user is on the SauceDemo login page', async function () {
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);

  await this.loginPage.navigate(BASE_URL);
});

When('the user logs in with standard credentials', async function () {
  await this.loginPage.login(
    STANDARD_USER.username,
    STANDARD_USER.password
  );
});

Then('the products page should be displayed', async function () {
  await this.productsPage.verifyPageIsDisplayed();
});

When('the user adds a product to the cart', async function () {
  await this.productsPage.addProductToCart();
});

Then('the cart should display 1 item', async function () {
  await this.productsPage.verifyCartItemCount('1');
});

Then('the user logs out', async function () {
  await this.productsPage.logout();
});

When('the user logs in with invalid credentials', async function () {
  await this.loginPage.login(
    users.invalid.username,
    users.invalid.password
  );
});

Then('an error message should be displayed', async function () {
  await this.loginPage.verifyErrorMessageIsDisplayed();
});

