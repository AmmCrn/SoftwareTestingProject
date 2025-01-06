import { test, expect } from '@playwright/test';
import { ElectronicsPage } from '../page-objects/ElectronicsPage';

test('Filter and compare laptops', async ({ page }) => {
    const electronicsPage = new ElectronicsPage(page);
    
    await electronicsPage.navigateToElectronics();
    
    await electronicsPage.selectLaptops();
    await electronicsPage.compareFirstTwoItems();
})