import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');

    // ページタイトルの確認
    await expect(page).toHaveTitle(/WONDERFUL WORLD/);

    // ヘッダーの存在確認
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // ロゴの存在確認
    const logo = page.locator('header').getByText('WONDERFUL WORLD');
    await expect(logo).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // ナビゲーションリンクの確認
    const aboutLink = page.locator('nav').getByRole('link', { name: /会社情報/ });
    await expect(aboutLink).toBeVisible();

    const contactLink = page.locator('nav').getByRole('link', { name: /お問い合わせ/ });
    await expect(contactLink).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // ヒーローセクションの確認
    const heroHeading = page.getByRole('heading', { level: 1 });
    await expect(heroHeading).toBeVisible();
  });

  test('should have footer with copyright', async ({ page }) => {
    await page.goto('/');

    // フッターの確認
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // コピーライトの確認
    await expect(footer).toContainText('WONDERFUL WORLD');
  });
});
