import { Page } from 'playwright';

export class ProductPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  addtoCartButton = () => this.page.locator('button#addToCartButton').first();
  continueButton = () => this.page.locator('a.btn--continue-shopping');
  productDetailsName = () => this.page.locator('.product-details >> div.name');
  quantityInput = () => this.page.locator('input#pdpAddtoCartInput');

  async addToCart() {
    await this.addtoCartButton().click();
    await this.continueButton().waitFor();
  }
  async continueToCart(){
    await this.continueButton().click();
  }
  async getMaxQuantity() {
    const maxQuantity = await this.quantityInput().getAttribute("data-max");
    // maxquant nije null nd converts to int
    return maxQuantity ? parseInt(maxQuantity, 10) : 0; // Return 0 or any default value if null
  }

  async setQuantity(quantity: number) {
    await this.quantityInput().fill(quantity.toString());
  }
}
