import { Page } from '@playwright/test';
import { readJSON } from '../utils/dataUtils';

export default class BasePage {
  protected page: Page;
  protected locators: any;

  constructor(page: Page, pageName: string) {
    this.page = page;
    this.locators = readJSON('../locators/locators.json')[pageName];
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
}
