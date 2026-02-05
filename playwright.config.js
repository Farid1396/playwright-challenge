import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  retries: process.env.CI ? 1 : 0,

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.js/
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        storageState: 'storage/auth.json'
      },
      dependencies: ['setup']
    }
  ],
});
