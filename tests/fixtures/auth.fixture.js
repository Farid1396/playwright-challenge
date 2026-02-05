import { test as base } from '@playwright/test';

export const test = base.extend({
  loggedPage: async ({ page }, use) => {
    await page.goto('/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await use(page);
  }
});

export { expect } from '@playwright/test';
