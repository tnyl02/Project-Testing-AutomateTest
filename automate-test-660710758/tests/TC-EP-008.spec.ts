import { test, expect } from '@playwright/test';

test('TC-EP-008', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('button', { name: 'ค้นหาใบคำสั่งปฏิบัติงาน' }).click();
  await page.locator('#headlessui-combobox-button-_r_17_').click();
  await page.getByRole('option', { name: 'a1,a2 หัว: 71-8789 หาง: 71-' }).click();
  await page.getByRole('button', { name: 'ค้นหา', exact: true }).click();
  await expect(page.getByText('ไม่พบข้อมูลลองเปลี่ยนคำค้นหาแล้วค้นหาใหม่อีกครั้ง')).toBeVisible();
});