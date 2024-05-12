import { test as setup, expect } from '@playwright/test';

const authFile = './.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://webapp.hucu.us/');
  await page.getByPlaceholder('Username or Email').click();
  await page.getByPlaceholder('Username or Email').fill('sk.test6');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Saeed123@');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('1');
  await page.getByRole('textbox').nth(1).fill('1');
  await page.getByRole('textbox').nth(2).fill('1');
  await page.getByRole('textbox').nth(3).fill('1');
  // await page.waitForLoadState('networkidle');
  await page.context().storageState({ path: authFile });
  // webContext = await browser.newContext({storageState:'hucustate.json'});

  await page.context().storageState({ path: authFile });
});