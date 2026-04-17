import { test, expect } from '@playwright/test';

test('TC-PICK-001', async ({ page }) => {
    await page.goto('https://zola-trans-frontend-uat.vercel.app/login');
    await page.getByRole('textbox', { name: 'เช่น' }).fill('admin');
    await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('1234');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('navigation').getByRole('button', { name: 'เคลียร์เงินทดลองจ่าย' }).click();

    await page.getByRole('button', { name: 'เรียกดูรายการเบิกเงิน' }).click();
    await page.locator('.lucide.lucide-square.w-5.h-5.text-gray-300').first().click();
    await page.locator('.lucide.lucide-square.w-5.h-5.text-gray-300').first().click();
    await page.locator('.lucide.lucide-square.w-5.h-5.text-gray-300').first().click();
    const clearButton = page.getByRole('main').getByRole('button', { name: 'เคลียร์เงินทดลองจ่าย' });
    
    await expect(clearButton).toBeVisible();
    await expect(clearButton).toBeEnabled();
});