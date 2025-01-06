import { Page } from 'playwright';

export class CartPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  checkoutButton = () => this.page.locator('button.btn--continue-checkout');
  //checkoutButton = () => this.page.getByText('Nastavi na odabir dostave');
  firstCartItem = () => this.page.locator('.item__list--item').first();
  removeFirstCartItemButton = () => this.page.locator('button.remove-from-cart').first();

  async goto() {
    await this.page.goto("https://www.ekupi.ba/bs/cart");
  }
  async removeFirstItemFromCart() {
    await this.removeFirstCartItemButton().click();
  //    await this.firstCartItem().locator('.mini-cart-link').click();
    //await this.page.click(`text=${itemName} >> button.remove-from-cart`); // button.remove
  }
  async proceedToCheckout() {
    await this.checkoutButton().click();
  }
  async getCartItems() {
    //return await this.page.$$eval('.cart-item', items => items.map(item => item.textContent));
    // TODO ekupi has a messed up item class idk if this is correct:
    return await this.page.$$eval('.item__list--item', items => items.map(item =>item.textContent));
    // or does this function only get the item names?
  }
}
