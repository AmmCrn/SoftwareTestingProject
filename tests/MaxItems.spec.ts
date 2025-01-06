import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { ProductPage } from '../page-objects/ProductPage';

test('Validate maximum items that can be added to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homePage.navigateToHomePage();
  await homePage.clickProductLink(); 

  const maxQuantity = await productPage.getMaxQuantity(); // Get the max quantity allowed

  // Attempt to set quantity to max + 1
  await productPage.setQuantity(maxQuantity + 1);
  await productPage.addToCart(); // Try to add to cart

  // Check if the button is disabled
  const increaseButton = page.locator('button.js-qty-selector-plus');
  const isDisabled = await increaseButton.getAttribute('disabled');

  // 
  expect(isDisabled).toBe('disabled'); 
});