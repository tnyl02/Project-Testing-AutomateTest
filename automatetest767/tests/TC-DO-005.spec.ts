import { test, expect } from '@playwright/test';

test('TC-DO-005', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).click();
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('textbox', { name: 'ระบุสถานที่จัดส่ง' }).click();
  await page.getByRole('textbox', { name: 'ระบุสถานที่จัดส่ง' }).fill('xxxxxx');
  await page.getByRole('button', { name: 'เคลียร์', exact: true }).click();
  await expect(page.getByRole('textbox', { name: 'ระบุสถานที่จัดส่ง' })).toBeVisible();
});