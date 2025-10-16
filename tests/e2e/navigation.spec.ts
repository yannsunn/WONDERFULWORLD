import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');

    // 会社情報ページへのナビゲーション
    await page.click('text=会社情報');
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: /About/ })).toBeVisible();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');

    // お問い合わせページへのナビゲーション
    await page.click('text=お問い合わせ');
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: /Contact/ })).toBeVisible();
  });

  test('should navigate to AI Models business page', async ({ page }) => {
    await page.goto('/');

    // AIモデル事業ページへのナビゲーション（ドロップダウン）
    await page.hover('text=事業案内');
    await page.click('text=AIモデルインフルエンサー');
    await expect(page).toHaveURL('/business/ai-models');
  });

  test('should navigate to News page', async ({ page }) => {
    await page.goto('/business/ai-models');

    // ニュース一覧への遷移
    const newsLink = page.getByRole('link', { name: /ニュース/ }).first();
    if (await newsLink.isVisible()) {
      await newsLink.click();
      await expect(page).toHaveURL(/\/news/);
    }
  });

  test('should return to homepage from logo click', async ({ page }) => {
    await page.goto('/about');

    // ロゴクリックでホームに戻る
    await page.click('header a[href="/"]');
    await expect(page).toHaveURL('/');
  });
});
