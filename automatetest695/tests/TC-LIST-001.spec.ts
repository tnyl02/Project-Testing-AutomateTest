import { test, expect } from '@playwright/test';

test('TC-LIST-001', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('button', { name: 'เคลียร์เงินทดลองจ่าย' }).click();

  await page.getByRole('button', { name: 'เรียกดูรายการเบิกเงิน' }).click();
  await page.getByRole('heading', { name: 'เรียกดูรายการเบิกเงิน' }).click();
});