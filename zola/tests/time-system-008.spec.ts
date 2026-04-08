import { test, expect } from '@playwright/test';

test('TC-TIME-008: ทดสอบกรอกข้อมูลเวลาไม่ครบ 4 ลำดับ (Negative)', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.waitForTimeout(3000);

  await page.goto('https://zola-trans-frontend-uat.vercel.app/delivery-order');
  await page.getByRole('button', { name: 'คิดค่าใช้จ่าย' }).click();

  await page.getByRole('textbox', { name: 'เลขที่', exact: true }).fill('69030007');
  await page.getByRole('button', { name: 'ค้นหา', exact: true }).click();
  
  await page.getByRole('button', { name: 'Choose date' }).nth(1).click();
  await page.getByRole('gridcell', { name: '9', exact: true }).locator('visible=true').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(2).fill('50000');

  await page.getByRole('button', { name: 'Choose date' }).nth(2).click();
  await page.getByRole('gridcell', { name: '10', exact: true }).locator('visible=true').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(3).fill('51000');

  await page.getByPlaceholder('0').nth(4).fill('52000');
  await page.getByPlaceholder('0').nth(5).fill('52997');

  await page.locator('.bg-white > .p-6 > .grid > div > .w-full').first().fill('1001');

  await page.getByRole('button', { name: 'บันทึก', exact: true }).click();
  const errorHeader = page.locator('div').filter({ hasText: /^บันทึกไม่สำเร็จกรุณาตรวจสอบความถูกต้องของข้อมูล$/ }).first();
  await expect(errorHeader).toBeVisible();

  await expect(page.getByText('กรุณาระบุเวลาออกจากหน่วยงาน')).toBeVisible();
  await expect(page.getByText('กรุณาระบุเวลากลับเข้าโรงงาน')).toBeVisible();

  await page.getByRole('button', { name: 'ตกลง' }).click();

});