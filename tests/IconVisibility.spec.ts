import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Verify Cart Icon Visibility', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await homePage.clickCartIcon();
  expect(await homePage.cartIcon().isVisible()).toBe(true);
});
