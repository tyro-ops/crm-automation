import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import RegistrationPage from '../pages/registrationPage';
import DashboardPage from '../pages/dashboardPage';
import { readJSON } from '../utils/dataUtils';
import { takeScreenshot } from '../utils/testUtils';
import { assertText } from '../utils/assertions';

const testData = readJSON('../data/testData.json');


test.describe('UI Tests', () => {
  test('should register a new user and login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registrationPage = new RegistrationPage(page);
    const dashboardPage = new DashboardPage(page);

    // Login as Admin
    await loginPage.navigate('/');
    await loginPage.login(testData.users.admin.username, testData.users.admin.password);
    expect(await loginPage.isLoggedIn()).toBe(true);
    await takeScreenshot(page, 'admin-login');

    // Add new employee
    const { username, password, employeeName } = testData.users.newUser;
    await registrationPage.addEmployee(employeeName.split(' ')[0], employeeName.split(' ')[1], username, password);
    expect(await registrationPage.isEmployeeAdded()).toBe(true);
    await takeScreenshot(page, 'employee-added');

    // Logout
    await dashboardPage.logout();
    expect(await loginPage.isLoginButtonVisible()).toBe(true);
    await takeScreenshot(page, 'logout');

    // Login with new user
    await loginPage.login(username, password);
    expect(await loginPage.isLoggedIn()).toBe(true);
    await takeScreenshot(page, 'new-user-login');

    // Verify welcome message
    const welcomeMessage = await dashboardPage.getWelcomeMessage();
    assertText(welcomeMessage, `Welcome ${employeeName.split(' ')[0]}`);
  });
});
