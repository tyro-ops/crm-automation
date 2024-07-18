import { expect, Page } from '@playwright/test';

export async function assertElementVisible(page: Page, locator: string) {
  const isVisible = await page.isVisible(locator);
  expect(isVisible).toBe(true);
}

export async function assertTextEquals(page: Page, locator: string, expectedText: string) {
  const text = await page.textContent(locator);
  expect(text).toBe(expectedText);
}

export function assertText(text: string, expectedText: string) {
    expect(text).toContain(expectedText);
  }



