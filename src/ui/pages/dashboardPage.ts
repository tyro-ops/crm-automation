import BasePage from './basePage';
import { Page } from '@playwright/test';

export default class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page, 'dashboardPage');
  }

  async getWelcomeMessage(): Promise<string> {
    return await this.page.textContent(this.locators.welcomeMessage) || '';
  }

  async logout() {
    await this.page.click(this.locators.welcomeMessage);
    await this.page.click('text=Logout');
  }
}


