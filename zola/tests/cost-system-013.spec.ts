import { test, expect } from '@playwright/test';

test('TC-COST-013: ทดสอบการทำงานของปุ่ม เคลียร์ (Clear Form)', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: 'คิดค่าใช้จ่าย' }).click();
  await page.getByRole('button', { name: 'คิดค่าใช้จ่าย' }).click();

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

  await page.locator('.grid.grid-cols-3 > .w-full').first().fill('2'); 
  await page.locator('.space-y-4 > div:nth-child(2) > .w-full').first().fill('500');
  await page.getByRole('textbox', { name: 'ระบุสาเหตุ' }).fill('รถเสีย');

  await page.locator('.bg-white > .p-6 > .grid > div > .w-full').first().fill('1000');
  await expect(page.getByText('รวมค่าใช้จ่าย2,000บาท')).toBeVisible();

  await page.getByRole('button', { name: 'เคลียร์', exact: true }).click();
  await expect(page.locator('div').filter({ hasText: 'ชื่อ พขร.ยังไม่มีข้อมูล' }).first()).toBeVisible();
  await expect(page.getByText('ยังไม่มีรายการสินค้ากรุณาค้นหา Workrecord เพื่อดึงข้อมูลสินค้า')).toBeVisible();
  await expect(page.getByText('รวมค่าใช้จ่าย0บาท')).toBeVisible();

});