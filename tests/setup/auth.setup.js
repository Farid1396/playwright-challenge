import { test } from '@playwright/test';
import { users } from '../../data/users';

test('authenticate user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', users.standard.username);
  await page.fill('[data-test="password"]', users.standard.password);
  await page.click('[data-test="login-button"]');

  await page.waitForURL('**/inventory.html');

  await page.context().storageState({
    path: 'storage/auth.json'
  });
});
