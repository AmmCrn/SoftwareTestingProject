import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class HomePage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  cartButton = () => this.page.locator(".mini-cart-link:visible").first(); // ekupi has a 2nd one for mobile i assume
  loginButton = () => this.page.getByText('Prijava / Registracija').locator(':visible').first();
  logoutButton = () => this.page.getByText('Odjavi se').locator(':visible').first(); // maybe unnecessary precaution
  contactButton = () => this.page.locator("//a[@href='/bs/Kontakt']");
  firstProduct = () => this.page.locator(".carousel__item").first(); // gets first product displayed on homepage
  cartIcon = () => this.page.locator('.mini-cart-icon:visible').first();
  searchInput = () => this.page.locator('input#js-site-search-input');
  searchButton = () => this.page.locator('.js_search_button');
  nthSearchResult = (n) => this.page.locator('.product-item').nth(n);
  searchSortSelector = 'select#sortOptions1';

  async navigateToHomePage() {
    await this.page.goto('https://www.ekupi.ba/');
  }
  async getTitle() {
    return await this.page.title();
  }
  async clickProductLink() {
    //await this.page.click('text=Product'); // what is this supposed to be?
    await this.firstProduct().click();
  }
  async clickCartIcon() {
    //await this.page.locator(".mini-cart-link").click();
    await this.cartButton().click();
  }
  async clickLoginLink() {
    //await this.page.click('text=Prijava / Registracija');
    await this.loginButton().click();
  }
  async clickLogoutLink(){
    await this.logoutButton().click();
  }
  async clickContactLink() {
    //await this.page.click("//a[@href='/bs/Kontakt']");
    await this.contactButton().click();
  }
  async searchFor(search: string) {
    await this.searchInput().fill(search);
    await this.page.keyboard.press('Enter');
    await this.searchButton().click();
    //await this.page.locator('.pagination-bar-results').waitFor();
  }
  async searchResultsLoaded(){
    await this.page.waitForSelector('.product-item');
    const results = await this.page.locator('.product-item');
    //const resultsCount = await this.page.locator('.product-item').count();
    const resultsCount = await results.count();
    return resultsCount > 0;
    //return await this.page.$$eval('.product-item', results => results.length);
  }
  async selectAscendingPrices(){
    await this.page.selectOption(this.searchSortSelector, {value: 'price-asc'});
  }
  async arePricesAscending(){
    let firstPrice = await this.nthSearchResult(1).locator('.price').textContent();
    let secondPrice = await this.nthSearchResult(2).locator('.price').textContent();
    // remove the 'KM' at the end
    if(firstPrice && secondPrice){
      firstPrice = firstPrice.trim().replace(',', '.');
      firstPrice = firstPrice.substring(0, firstPrice.length-3);
      secondPrice = secondPrice.trim().replace(',', '.');
      secondPrice = secondPrice.substring(0, secondPrice.length-3);

      return firstPrice <= secondPrice;
    }
    return false; // error somewhere
  }
}
