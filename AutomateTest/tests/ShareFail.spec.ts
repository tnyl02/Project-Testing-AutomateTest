import { test, expect } from '@playwright/test';

test('TC-SHR-005', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

  await page.goto('https://zola-trans-frontend-uat.vercel.app/delivery-order');
  await page.getByRole('button', { name: 'คำสั่งปฏิบัติงาน-ใบส่งของ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
});