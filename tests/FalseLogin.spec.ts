import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('Verify Login Functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("https://www.ekupi.ba/bs/login", {waitUntil: "load"});
    //await page.goto('https://www.ekupi.ba/bs/login');
    await loginPage.enterCredentials('Dingolous', 'McNugget');
    //await loginPage.logIn();
    await loginPage.submitLogin();

    expect(await loginPage.isUserLoggedIn()).toBe(false);
  });