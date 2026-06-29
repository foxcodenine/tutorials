const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('add and delete a card', async ({ page }) => {
  // click first + Card button
  await page.locator('text=+ Card').first().click();
  // fill modal
  await page.fill('input[name="cardTitle"]', 'E2E Card');
  await page.fill('textarea[name="cardDetails"]', 'details');
  await page.click('text=Save');
  await expect(page.locator('text=E2E Card')).toBeVisible();

  // delete the card
  const card = page.locator('article', { hasText: 'E2E Card' });
  await card.locator('text=Delete').click();
  await expect(page.locator('text=E2E Card')).toHaveCount(0);
});

test('drag a card between columns', async ({ page }) => {
  await page.locator('text=+ Card').first().click();
  await page.fill('input[name="cardTitle"]', 'DragCard');
  await page.click('text=Save');
  await expect(page.locator('text=DragCard')).toBeVisible();

  const source = page.locator('article', { hasText: 'DragCard' }).first();
  const target = page.locator('#col-2');

  // use Playwright dragAndDrop API
  await source.dragTo(target);

  // now the target column should contain the card
  await expect(target.locator('text=DragCard')).toBeVisible();
});
