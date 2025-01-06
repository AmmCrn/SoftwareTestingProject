import { test, expect } from '@playwright/test';
import { CartPage } from '../page-objects/CartPage';
import { HomePage } from '../page-objects/HomePage';
import { ProductPage } from '../page-objects/ProductPage';
import { LoginPage } from '../page-objects/LoginPage';
//import { loginAndSaveState } from '../utils/auth.ts';

test('Verify Checkout Process', async ({ browser, page }) => {
  const cartPage = new CartPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.validLogIn();
  //const authState = await loginAndSaveState(browser);

  await homePage.navigateToHomePage();
  await homePage.clickProductLink();
  await productPage.addToCart();
  await cartPage.goto();
  await cartPage.proceedToCheckout();
  let checkoutFormVisible = await page.isVisible('div#i18nAddressForm');
  expect(checkoutFormVisible).toBe(true); // what is this
  // like this?
  // expect(await page.isVisible('div#i18nAddressForm')).toBeTruthy();
  // like the form to fill in the address info for checkout?
});
