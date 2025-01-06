import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Verify Search Functionality (Positive)', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToHomePage();
  await homePage.searchFor('Laptopi'); // arbitrary search

  expect(await homePage.searchResultsLoaded()).toBe(true);
});
test('Verify Search Functionality (Negative)', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToHomePage();
  await homePage.searchFor('dsfakl'); // arbitrary search

  expect(await homePage.searchResultsLoaded()).toBe(false);
})