import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('Verify Login Functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  //await loginPage.enterCredentials('username', 'password');
  await loginPage.validLogIn();
  //await loginPage.submitLogin();

  expect(await loginPage.isUserLoggedIn()).toBe(true);
});