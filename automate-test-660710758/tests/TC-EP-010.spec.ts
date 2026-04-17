import { test, expect } from '@playwright/test';

test('TC-EP-010', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).click();
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'เช่น' }).press('Tab');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('button', { name: 'ค้นหาใบคำสั่งปฏิบัติงาน' }).click();
  await expect(page.getByRole('heading', { name: 'ค้นหาใบคำสั่งปฏิบัติงาน' })).toBeVisible();
  await page.locator('select').selectOption('1');
  await page.getByRole('button', { name: 'ค้นหา', exact: true }).click();
});