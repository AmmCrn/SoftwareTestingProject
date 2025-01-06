import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { LoginPage } from '../page-objects/LoginPage';

test('Verify Login Page Loads', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.navigateToHomePage();
  await homePage.clickLoginLink();
  expect(await loginPage.emailInput().isVisible()).toBe(true);
  expect(await loginPage.passwordInput().isVisible()).toBe(true);
  //expect(await page.isVisible('input[name="username"]')).toBeTruthy();
  //expect(await page.isVisible('input[name="password"]')).toBeTruthy();
});
