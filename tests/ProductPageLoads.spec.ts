import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { ProductPage } from '../page-objects/ProductPage';

test('Verify Product Page Loads', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.navigateToHomePage();
  await homePage.clickProductLink();
  expect(await productPage.productDetailsName().isVisible()).toBe(true);
  //expect(await page.isVisible('h1')).toBeTruthy();
});
