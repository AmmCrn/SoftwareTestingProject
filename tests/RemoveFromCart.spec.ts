import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { ProductPage } from '../page-objects/ProductPage';
import { CartPage } from '../page-objects/CartPage';

test('Remove Item from Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  
  await homePage.navigateToHomePage();
  await homePage.clickProductLink();
  await productPage.addToCart();
  await cartPage.goto();
  
  await cartPage.removeFirstItemFromCart();
  const cartItems = await cartPage.getCartItems();
  expect(cartItems.length).toBe(0);
});
