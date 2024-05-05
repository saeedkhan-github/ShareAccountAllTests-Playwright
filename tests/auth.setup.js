import { test as setup, expect } from '@playwright/test';

const authFile = './.auth/user.json';

setup('authenticate with UI',async({page})=>{

    await page.goto('https://demoqa.com/login');

    await page.locator('#userName').fill('saeedullah321');

    await page.locator('#password').fill('Saeed123@');

    await page.locator('#login').click();



})