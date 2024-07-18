import BasePage from './basePage';
import { Page } from 'playwright';

export default class RegistrationPage extends BasePage {
  constructor(page: Page) {
    super(page, 'registrationPage');
  }

  

  async addEmployee(firstName: string, lastName: string, username: string, password: string) {
    const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const usernameRan = `username${randomNumber}`;
    const employeeName = `${firstName} ${lastName}`;
    await this.page.click(this.locators.pimMenu);
    await this.page.click(this.locators.addEmployeeButton);
    await this.page.fill(this.locators.firstNameField, firstName);
    await this.page.fill(this.locators.lastNameField, lastName);
    await this.page.click(this.locators.saveButton);
    await this.page.click(this.locators.adminMenu);
    await this.page.click(this.locators.addEmployeeButton);
    await this.page.click(this.locators.UserEmployeeDropDown);
    await this.page.getByRole('option', { name: 'ESS' }).click();
    // await this.page.click(this.locators.StatusDropDown);
    // await this.page.getByRole('option', { name: 'Enabled' }).click();
    await this.page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
    await this.page.getByRole('option', { name: 'Enabled' }).click();
    await this.page.fill(this.locators.EmployeeNameField, employeeName);
    await this.page.getByRole('option', { name: employeeName }).nth(1).click();
    await this.page.fill(this.locators.usernameField, usernameRan);
    await this.page.fill(this.locators.passwordField, password);
    await this.page.fill(this.locators.confirmPasswordField, password);
   // await this.page.click(this.locators.essRole);
    await this.page.click(this.locators.saveUserButton);
    await this.page.getByRole('textbox').nth(1).click();
    await this.page.fill("(//input[@class='oxd-input oxd-input--active'])[2]", usernameRan);
    await this.page.click("//button[text()=' Search ']");
    await this.page.click('.oxd-icon.bi-check.oxd-checkbox-input-icon');
    await this.page.getByRole('button', { name: '' }).click();
    await this.page.getByRole('button', { name: ' Yes, Delete' }).click();
  }

  async isEmployeeAdded(): Promise<boolean> {
    return await this.page.isVisible(this.locators.successMessage);
  }
}

