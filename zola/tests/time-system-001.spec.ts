import { test, expect } from '@playwright/test';

test('TC-TIME-001: กรอกเวลาและเลขไมล์ตามลำดับตรรกะที่ถูกต้อง', async ({ page }) => {
  // 1. เข้าสู่ระบบ
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login'); 
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();

  await page.waitForURL('**/delivery-order', { waitUntil: 'networkidle', timeout: 15000 });
  
  await page.getByRole('button', { name: 'คิดค่าใช้จ่าย' }).click({ force: true });

  await page.getByRole('textbox', { name: 'เลขที่', exact: true }).fill('69030007');
  await page.getByRole('button', { name: 'ค้นหา', exact: true }).click();

  await page.getByRole('button', { name: 'Choose date' }).nth(1).click();
  await page.getByRole('gridcell', { name: '9', exact: true }).first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(2).fill('50000');

  await page.getByRole('button', { name: 'Choose date' }).nth(2).click();
  await page.getByRole('gridcell', { name: '10', exact: true }).first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(3).fill('51000');

  await page.getByRole('button', { name: 'Choose date' }).nth(3).click();
  await page.getByRole('gridcell', { name: '11', exact: true }).first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(4).fill('52000');

  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('gridcell', { name: '12', exact: true }).first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(5).fill('53000');

  await page.locator('body').click();

  await expect(page.getByText('กรุณาตรวจสอบความถูกต้อง')).not.toBeVisible();
});