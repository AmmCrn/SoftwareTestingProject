import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { Page } from 'playwright';

export class ElectronicsPage {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    async navigateToElectronics() {
        await this.page.goto('https://www.ekupi.ba/bs/');
        // Wait for the 'Računari' link to be visible and then click it
        const electronicsLink = this.page.locator('text=Računari').first();
        await electronicsLink.waitFor({ state: 'visible' }); // Ensure the element is visible
        await electronicsLink.hover(); // Click the link to navigate to the electronics section
    }

    async selectLaptops() {
        // Wait for the 'Laptopi' link to be visible and then click it
        const laptopsLink = this.page.locator('a:has-text("Laptopi")').first();
        await laptopsLink.click(); // Click the link to select laptops
    }

    async compareFirstTwoItems() {
        // Wait for the product items to load
        //await this.page.waitForSelector('.product-item'); // Adjust the selector based on the actual items

        // Select the first two items and click the compare option
        const items = await this.page.locator('.product-item').all();
        if (items.length >= 2) {
            await items[0].locator('text=Usporedite proizvod').click(); // Adjust the selector for the compare button
            await items[1].locator('text=Usporedite proizvod').click(); // Adjust the selector for the compare button
        } else {
            console.log('Not enough items to compare.');
        }
    }
}