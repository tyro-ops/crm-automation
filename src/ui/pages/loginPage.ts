import { Page } from 'playwright';
import BasePage from './basePage';

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page, 'loginPage');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.fill(this.locators.usernameField, username);
    await this.page.fill(this.locators.passwordField, password);
    await this.page.click(this.locators.loginButton);
  }


  async isLoginButtonVisible(): Promise<boolean> {
    return this.page.isVisible(this.locators.loginButton);
  }


  async handleMFA(mfaCode: string) {
    await this.page.fill(this.locators.mfaInput, mfaCode); // Assuming `mfaInput` is defined in locators.json
    await this.page.click(this.locators.submitMfaButton);  // Assuming `submitMfaButton` is defined in locators.json
  }
}
