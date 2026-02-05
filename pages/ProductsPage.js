import { expect } from '@playwright/test';

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async verifyPageIsDisplayed() {
    await expect(this.title).toHaveText('Products');
  }

  async addProduct(product) {
    await this.page.click(product.addButton);
  }

  async verifyCartCount(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
