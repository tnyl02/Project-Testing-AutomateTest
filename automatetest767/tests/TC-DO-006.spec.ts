import { test, expect } from '@playwright/test';

test('TC-DO-006', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).click();
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await expect(page.getByText('บันทึกไม่สำเร็จกรุณาตรวจสอบข้อมูลต่อไปนี้:รหัสพนักงาน: กรุณาเลือกรหัสพนักงานชื่อ')).toBeVisible();
  await page.getByRole('button', { name: 'ปิด' }).click();
});