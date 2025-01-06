import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Verify Contact Page Loads', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await homePage.clickContactLink();
  // expect(await page.isVisible('form#contact')).toBeTruthy();
  // bukv nema forme na kontaktu jedino da vidim kao
  expect(await page.isVisible("//strong[text()='EKUPI d.o.o., za trgovinu, usluge']")).toBeTruthy();
  // ili tako nesto??
});
