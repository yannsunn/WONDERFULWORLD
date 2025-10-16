import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form with all required fields', async ({ page }) => {
    // フォームの存在確認
    await expect(page.getByLabel(/お名前/)).toBeVisible();
    await expect(page.getByLabel(/メールアドレス/)).toBeVisible();
    await expect(page.getByLabel(/お問い合わせ内容/)).toBeVisible();

    // プライバシーポリシー同意チェックボックス
    await expect(page.getByRole('checkbox')).toBeVisible();

    // 送信ボタン
    await expect(page.getByRole('button', { name: /送信/ })).toBeVisible();
  });

  test('should show validation error for empty form submission', async ({ page }) => {
    // 空のまま送信ボタンをクリック
    await page.getByRole('button', { name: /送信/ }).click();

    // HTML5バリデーションにより送信されないことを確認
    await expect(page).toHaveURL('/contact');
  });

  test('should fill and submit contact form successfully', async ({ page }) => {
    // フォームに入力
    await page.getByLabel(/お名前/).fill('山田太郎');
    await page.getByLabel(/メールアドレス/).fill('test@example.com');
    await page.getByLabel(/お問い合わせ内容/).fill('これはテストメッセージです。');

    // プライバシーポリシーに同意
    await page.getByRole('checkbox').check();

    // 送信ボタンをクリック
    await page.getByRole('button', { name: /送信/ }).click();

    // 成功メッセージの確認（モック送信なので即座に表示される）
    await expect(page.getByText(/送信完了/)).toBeVisible({ timeout: 5000 });
  });

  test('should display form with proper accessibility attributes', async ({ page }) => {
    // ARIA属性の確認
    const nameInput = page.getByLabel(/お名前/);
    await expect(nameInput).toHaveAttribute('aria-required', 'true');

    const emailInput = page.getByLabel(/メールアドレス/);
    await expect(emailInput).toHaveAttribute('aria-required', 'true');

    const messageInput = page.getByLabel(/お問い合わせ内容/);
    await expect(messageInput).toHaveAttribute('aria-required', 'true');
  });
});
