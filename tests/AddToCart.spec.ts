import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { CartPage } from '../page-objects/CartPage';
import { ProductPage } from '../page-objects/ProductPage.ts';
import { LoginPage } from '../page-objects/LoginPage.ts';

test('Add Item to Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const productPage = new ProductPage(page);
  
  await homePage.navigateToHomePage();
  await homePage.clickProductLink();
  //await page.click('button#addToCartButton'); // button#add-to-cart
  //await page.locator('a.btn--continue-shopping').click();
  await productPage.addToCart();
  await productPage.continueToCart();
  
  const cartItems = await cartPage.getCartItems();
  expect(cartItems.length).toBeGreaterThan(0);
});
