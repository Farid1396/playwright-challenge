import { expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;

    this.productsTitle = page.locator('.title');
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async verifyPageIsDisplayed() {
    await expect(this.productsTitle).toBeVisible();
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async verifyCartItemCount(expectedCount) {
    await expect(this.cartBadge).toHaveText(expectedCount);
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
