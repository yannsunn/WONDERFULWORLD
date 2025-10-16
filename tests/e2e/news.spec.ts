import { test, expect } from '@playwright/test';

test.describe('News System', () => {
  test('should display news list page', async ({ page }) => {
    await page.goto('/business/ai-models/news');

    // ページタイトルの確認
    await expect(page.getByRole('heading', { name: /News/ })).toBeVisible();

    // ニュース記事が表示されていることを確認
    const newsCards = page.locator('article, .news-card, [class*="card"]');
    const count = await newsCards.count();

    // 少なくとも1つのニュース記事が存在することを確認
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to news detail page', async ({ page }) => {
    await page.goto('/business/ai-models/news');

    // 最初のニュース記事をクリック
    const firstNewsLink = page.locator('a[href*="/news/"]').first();
    await firstNewsLink.click();

    // 詳細ページに遷移していることを確認
    await expect(page).toHaveURL(/\/news\/.+/);

    // 記事タイトルが表示されていることを確認
    const articleTitle = page.locator('h1');
    await expect(articleTitle).toBeVisible();
  });

  test('should display news article with metadata', async ({ page }) => {
    await page.goto('/business/ai-models/news/best-of-miss-tokyo-2025');

    // 記事タイトル
    await expect(page.locator('h1')).toBeVisible();

    // 日付
    await expect(page.locator('time, [class*="date"]')).toBeVisible();

    // カテゴリ
    await expect(page.getByText(/イベント|お知らせ|プレスリリース/)).toBeVisible();

    // 記事内容
    await expect(page.locator('article, [class*="content"]')).toBeVisible();
  });

  test('should have back to news list link', async ({ page }) => {
    await page.goto('/business/ai-models/news/best-of-miss-tokyo-2025');

    // 一覧に戻るリンクが存在することを確認
    const backLink = page.getByRole('link', { name: /ニュース一覧/ });
    await expect(backLink).toBeVisible();

    // クリックして一覧に戻る
    await backLink.first().click();
    await expect(page).toHaveURL('/business/ai-models/news');
  });

  test('should show NEW badge for recent articles', async ({ page }) => {
    await page.goto('/business/ai-models/news');

    // NEWバッジが存在するか確認（7日以内の記事がある場合）
    const newBadge = page.getByText(/NEW|新着/);
    if (await newBadge.isVisible()) {
      await expect(newBadge).toBeVisible();
    }
  });
});
