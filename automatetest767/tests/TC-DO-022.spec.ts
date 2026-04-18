import { test, expect } from '@playwright/test';

test('TC-DO-022', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).click();
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('button', { name: 'Choose date' }).nth(2).click();
  await page.getByRole('gridcell', { name: '10' }).click();
  await page.getByRole('option', { name: '1 hours', exact: true }).click();
  await page.getByRole('option', { name: '30 minutes' }).click();
  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('gridcell', { name: '9', exact: true }).click();
  await page.getByRole('option', { name: '3 hours', exact: true }).click();
  await page.getByRole('option', { name: '30 minutes' }).click();
});