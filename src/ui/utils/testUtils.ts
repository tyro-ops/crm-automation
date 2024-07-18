import { Page } from '@playwright/test';

export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({ path: `screenshots/${name}-${Date.now()}.png` });
}
