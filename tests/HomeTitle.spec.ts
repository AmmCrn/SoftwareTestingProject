import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Verify Home Page Title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  const title = await homePage.getTitle();
  expect(title).toBe("eKupi.ba - Vaša internet trgovina: Najbolje ponude i cijene!");
});
