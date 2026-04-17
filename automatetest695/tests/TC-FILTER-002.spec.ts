import { test, expect } from '@playwright/test';

test('TC-FILTER-002', async ({ page }) => {
    await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
    await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
    await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('button', { name: 'เคลียร์เงินทดลองจ่าย' }).click();

    await page.getByRole('textbox', { name: 'เลขที่ใบเคลียร์' }).click();
    await page.getByRole('textbox', { name: 'เลขที่ใบเคลียร์' }).fill('3000000');
    await page.getByRole('button', { name: 'ค้นหา', exact: true }).click();

    const tableCell = page.getByRole('cell', { name: '3000000' });
    await expect(tableCell).not.toBeVisible();
});