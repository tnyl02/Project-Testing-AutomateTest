import { test, expect } from '@playwright/test';

test('TC-COST-004: ทดสอบการบวกเลข รวมค่าใช้จ่าย อัตโนมัติ และบันทึกข้อมูล', async ({ page }) => {
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

  await page.getByRole('button', { name: 'Choose date' }).nth(3).click();
  await page.getByRole('gridcell', { name: '11', exact: true }).locator('visible=true').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(4).fill('52000'); 

  await page.getByRole('button', { name: 'Choose date', exact: true }).click();
  await page.getByRole('gridcell', { name: '12', exact: true }).locator('visible=true').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByPlaceholder('0').nth(5).fill('53000'); 

  await page.locator('.bg-white > .p-6 > .grid > div > .w-full').first().fill('1000');
  await page.locator('div:nth-child(5) > .w-full').fill('1500');

  await expect(page.getByText('รวมค่าใช้จ่าย2,500บาท')).toBeVisible();
  
  await expect(page.getByText('ค่าเหลือเงินคืน :2,500 บาทหักเงินประกัน 5% :-50 บาทรวมเงินคืนทั้งสิ้น2,450')).toBeVisible();

  await page.getByRole('button', { name: 'บันทึก', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'บันทึก' }).nth(2).click();

  await expect(page.getByText(/บันทึกสำเร็จ/)).toBeVisible({ timeout: 15000 });

  await page.getByRole('button', { name: 'ไม่พิมพ์' }).click();
});