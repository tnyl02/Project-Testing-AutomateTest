import { test, expect } from '@playwright/test';

test('TC-AUTH-002', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await expect(page.getByRole('button', { name: 'เข้าสู่ระบบ' })).toBeVisible();
  await expect(page.getByText('กรุณากรอกรหัสผู้ใช้', { exact: true })).toBeVisible();

  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByText('กรุณากรอกรหัสผ่าน')).toBeVisible();

  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByText('กรุณากรอกรหัสผู้ใช้', { exact: true })).toBeVisible();

});