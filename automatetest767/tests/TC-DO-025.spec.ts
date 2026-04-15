import { test, expect } from '@playwright/test';

test('TC-DO-025', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).click();
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('combobox', { name: 'ค้นหาสินค้า' }).click();
  await page.locator('#headlessui-combobox-button-_r_r_').click();
  await page.getByRole('option', { name: 'EM - น้ำยา EM CRS-' }).click();
  await page.locator('input[type="number"]').click();
  await page.locator('input[type="number"]').fill('-1');
  await page.locator('input[type="number"]').press('Enter');
});