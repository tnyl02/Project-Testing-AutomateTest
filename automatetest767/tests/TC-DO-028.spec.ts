import { test, expect } from '@playwright/test';

test('TC-DO-028', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).click();
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.locator('.flex-1.min-w-0').first().click();
  await page.locator('.flex-1.min-w-0').first().fill('กขค');
  await page.locator('.grid > div:nth-child(2) > .flex > .flex-1').click();
  await page.locator('.grid > div:nth-child(2) > .flex > .flex-1').fill('กขค');
  await page.locator('.grid > div:nth-child(3) > .flex > .flex-1').click();
  await page.locator('.grid > div:nth-child(3) > .flex > .flex-1').fill('กขค');
});