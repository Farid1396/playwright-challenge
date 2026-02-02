import { Before, After } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from 'playwright';

const browsers = {
  chromium,
  firefox,
  webkit
};

Before(async function () {
  const browserType = process.env.BROWSER || 'chromium';

  this.browser = await browsers[browserType].launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
});