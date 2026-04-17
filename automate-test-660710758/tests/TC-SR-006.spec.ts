import { test, expect } from '@playwright/test';

test('TC-SR-006', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'เช่น' }).press('Tab');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('button', { name: 'ค้นหาใบคำสั่งปฏิบัติงาน' }).click();
  await page.getByRole('combobox', { name: 'รหัส หรือ ชื่อลูกค้า' }).click();
  await page.getByRole('combobox', { name: 'รหัส หรือ ชื่อลูกค้า' }).fill('อู่');
  await page.getByRole('option', { name: '0.0 - อู่รุ่งเพชร' }).click();
  await page.getByRole('button', { name: 'ค้นหา', exact: true }).click();
});