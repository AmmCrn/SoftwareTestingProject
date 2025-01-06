import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Verify Search Sorting Functionality', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToHomePage();
  await homePage.searchFor("Laptopi"); // arbitrarily chosen search
  await expect(await homePage.searchResultsLoaded()).toBe(true);
  await homePage.selectAscendingPrices();
  await expect(await homePage.searchResultsLoaded()).toBe(true);
  // now check if the prices *are* ascending
  await expect(await homePage.arePricesAscending()).toBe(true);
});
