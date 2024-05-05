import { test, expect } from '@playwright/test';

test('login demosqa', async ({ page }) => {
    await page.goto('https://demoqa.com/login',{timeout:60000});

    await page.locator('#userName').fill('saeedullah321');

    await page.locator('#password').fill('Saeed123@');

    await page.locator('#login').click();

});