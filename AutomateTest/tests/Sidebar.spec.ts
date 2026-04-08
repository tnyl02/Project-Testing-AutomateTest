import { test, expect } from '@playwright/test';

test('TC-SIDE-001', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

  await expect(page.getByRole('button', { name: 'Transport' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'คำสั่งปฏิบัติงาน-ใบส่งของ' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'ค้นหาใบคำสั่งปฏิบัติงาน' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'คิดค่าใช้จ่าย' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'เคลียร์เงินทดลองจ่าย' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Exit System' })).toBeVisible();
});