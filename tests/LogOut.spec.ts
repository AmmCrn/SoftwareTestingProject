import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { LoginPage } from '../page-objects/LoginPage';

test('Verify User Logout', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.logIn();
  await homePage.clickLogoutLink();

  const isLoggedOut = await homePage.loginButton().isVisible();
  expect(isLoggedOut).toBe(true);
});
