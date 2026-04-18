import { test, expect } from '@playwright/test';

test('TC-PR-027', async ({ page }) => {
  await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
  await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
  await page.getByRole('textbox', { name: 'เช่น' }).press('Tab');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คำสั่งปฏิบัติงาน-ใบสั่งจ้าง' })).toBeVisible();
  await page.getByRole('button', { name: 'ค้นหาใบคำสั่งปฏิบัติงาน' }).click();
  await expect(page.getByRole('heading', { name: 'ค้นหาใบคำสั่งปฏิบัติงาน' })).toBeVisible();
  await page.getByRole('button', { name: 'พิมพ์' }).first().click();
  await expect(page.getByRole('heading', { name: 'เลือกรูปแบบการพิมพ์' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^เลือกรูปแบบการพิมพ์$/ }).first()).toBeVisible();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Print Preview ดูตัวอย่าง PDF' }).click();
  const page1 = await page1Promise;
});