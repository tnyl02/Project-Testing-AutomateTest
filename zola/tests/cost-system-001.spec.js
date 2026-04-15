import { test, expect } from '@playwright/test';

test('TC-COST-001: ค้นหา Workrecord ด้วยเลขที่ถูกต้อง', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');

  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin'); 
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.waitForTimeout(3000);

  await page.goto('https://zola-trans-frontend-uat.vercel.app/delivery-order');
  await page.getByRole('button', { name: 'คิดค่าใช้จ่าย' }).click();
  await page.getByRole('textbox', { name: 'เลขที่', exact: true }).fill('69030007');
  await page.getByRole('button', { name: 'ค้นหา', exact: true }).click();

  await expect(page.getByText('อภิเดช ทองคำ')).toBeVisible();

  await expect(page.getByText('ลำดับรหัสสินค้า')).toBeVisible();

});