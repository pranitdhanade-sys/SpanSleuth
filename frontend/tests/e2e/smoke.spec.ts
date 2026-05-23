import { test, expect } from '@playwright/test';

test('@smoke @critical home page renders core navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/PulseGuard|SpanSleuth/i);
  await expect(page.getByRole('link', { name: /Open Dashboard/i })).toBeVisible();
test('home page renders', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/PulseGuard|SpanSleuth/i);
});
