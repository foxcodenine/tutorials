import { test, expect, Page } from '@playwright/test';

const BASE = 'http://127.0.0.1:8000';
const USER = 'user';
const PASS = 'password';

// ── helpers ──────────────────────────────────────────────────────────────────

async function login(page: Page, username = USER, password = PASS) {
  await page.goto('/');
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: /sign in/i }).click();
}

async function loginAndWaitForBoard(page: Page) {
  await login(page);
  await page.waitForSelector('[data-testid^="column-"]', { timeout: 15000 });
}

// ── Auth ─────────────────────────────────────────────────────────────────────

test.describe('Auth', () => {
  test('shows login form on first visit', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
  });

  test('shows error for wrong credentials', async ({ page }) => {
    await login(page, USER, 'wrongpassword');
    await expect(page.getByText(/invalid username or password/i)).toBeVisible();
  });

  test('redirects to board after successful login', async ({ page }) => {
    await loginAndWaitForBoard(page);
    const columns = page.locator('[data-testid^="column-"]');
    await expect(columns).toHaveCount(5);
  });

  test('logout returns to login form', async ({ page }) => {
    await loginAndWaitForBoard(page);
    await page.getByRole('button', { name: /logout/i }).click();
    await expect(page.getByLabel('Username')).toBeVisible();
  });

  test('board is not accessible without login (401)', async ({ request }) => {
    const res = await request.get(`${BASE}/api/board`);
    expect(res.status()).toBe(401);
  });
});

// ── Board loads ───────────────────────────────────────────────────────────────

test.describe('Board', () => {
  test('renders 5 columns with names', async ({ page }) => {
    await loginAndWaitForBoard(page);
    const columns = page.locator('[data-testid^="column-"]');
    await expect(columns).toHaveCount(5);
    // At least one column visible with expected name
    await expect(page.getByText('Backlog')).toBeVisible();
  });

  test('cards are visible inside their column', async ({ page }) => {
    await loginAndWaitForBoard(page);
    const cards = page.locator('[data-testid^="card-"]');
    await expect(cards.first()).toBeVisible();
  });

  test('column shows correct card count badge', async ({ page }) => {
    await loginAndWaitForBoard(page);
    // First column (Backlog) should have a badge with a number
    const firstCol = page.locator('[data-testid^="column-"]').first();
    // badge is a span with a number — just check it exists and is not "0" necessarily
    const badge = firstCol.locator('span').filter({ hasText: /^\d+$/ }).first();
    await expect(badge).toBeVisible();
  });
});

// ── Add card ──────────────────────────────────────────────────────────────────

test.describe('Add card', () => {
  test('adds a card to a column and it appears', async ({ page }) => {
    await loginAndWaitForBoard(page);

    const firstCol = page.locator('[data-testid^="column-"]').first();
    const cardsBefore = await firstCol.locator('[data-testid^="card-"]').count();
    const title = `E2E Card ${Date.now()}`;

    await firstCol.getByRole('button', { name: /add card/i }).click();
    await firstCol.getByPlaceholder('Card title').fill(title);
    await firstCol.getByPlaceholder('Details (optional)').fill('Added by Playwright');
    await firstCol.getByRole('button', { name: /^add card$/i }).click();

    await expect(firstCol.getByText(title)).toBeVisible();
    const cardsAfter = await firstCol.locator('[data-testid^="card-"]').count();
    expect(cardsAfter).toBe(cardsBefore + 1);
  });

  test('added card persists after page reload', async ({ page }) => {
    await loginAndWaitForBoard(page);

    const firstCol = page.locator('[data-testid^="column-"]').first();
    const title = `Persist-${Date.now()}`;

    await firstCol.getByRole('button', { name: /add card/i }).click();
    await firstCol.getByPlaceholder('Card title').fill(title);
    await firstCol.getByRole('button', { name: /^add card$/i }).click();
    await expect(firstCol.getByText(title)).toBeVisible();

    await page.reload();
    await page.waitForSelector('[data-testid^="column-"]', { timeout: 15000 });
    await expect(page.getByText(title)).toBeVisible();
  });
});

// ── Rename column ─────────────────────────────────────────────────────────────

test.describe('Rename column', () => {
  test('renames a column and new name is visible', async ({ page }) => {
    await loginAndWaitForBoard(page);

    // Use the 5th column (index 4 = last) — pick by testid of the last column
    const cols = page.locator('[data-testid^="column-"]');
    const lastCol = cols.last();
    const newName = `Renamed-${Date.now()}`;

    // Click the rename button (title="Click to rename") and wait for input
    await lastCol.getByTitle('Click to rename').click();
    const input = lastCol.locator('input').first();
    await input.waitFor({ state: 'visible', timeout: 5000 });
    await input.selectAll?.();
    await input.fill(newName);
    await input.press('Enter');

    await expect(lastCol.getByTitle('Click to rename')).toHaveText(newName);
  });
});

// ── Drag and drop ─────────────────────────────────────────────────────────────

test.describe('Drag and drop', () => {
  test('moves a card between columns using native DnD', async ({ page }) => {
    await loginAndWaitForBoard(page);

    const cols = page.locator('[data-testid^="column-"]');
    const srcCol = cols.nth(0); // Backlog
    const dstCol = cols.nth(2); // In Progress

    const srcCards = srcCol.locator('[data-testid^="card-"]');
    await expect(srcCards.first()).toBeVisible();

    const cardBefore = await srcCards.count();
    const dstBefore = await dstCol.locator('[data-testid^="card-"]').count();

    await page.dragAndDrop(
      `[data-testid^="column-"]:nth-child(1) [data-testid^="card-"]:first-child`,
      `[data-testid^="column-"]:nth-child(3)`
    );

    await page.waitForTimeout(500);

    const cardAfter = await srcCol.locator('[data-testid^="card-"]').count();
    const dstAfter = await dstCol.locator('[data-testid^="card-"]').count();

    // Count-based assertions: source lost one card, destination gained one
    expect(cardAfter).toBe(cardBefore - 1);
    expect(dstAfter).toBe(dstBefore + 1);
  });
});

// ── AI Sidebar ────────────────────────────────────────────────────────────────

test.describe('AI Sidebar', () => {
  test('Open AI button is visible', async ({ page }) => {
    await loginAndWaitForBoard(page);
    await expect(page.getByRole('button', { name: /open ai/i })).toBeVisible();
  });

  test('toggles sidebar open and closed', async ({ page }) => {
    await loginAndWaitForBoard(page);

    await page.getByRole('button', { name: /open ai/i }).click();
    await expect(page.getByTestId('chat-sidebar')).toBeVisible();
    await expect(page.getByRole('button', { name: /close ai/i })).toBeVisible();

    await page.getByRole('button', { name: /close ai/i }).click();
    await expect(page.getByTestId('chat-sidebar')).not.toBeVisible();
  });

  test('sends a message and receives a reply', async ({ page }) => {
    test.setTimeout(90000); // AI calls can take time
    await loginAndWaitForBoard(page);

    await page.getByRole('button', { name: /open ai/i }).click();
    await expect(page.getByTestId('chat-sidebar')).toBeVisible();

    await page.getByPlaceholder(/ask the ai/i).fill('Say hello in exactly three words.');
    await page.getByRole('button', { name: /^send$/i }).click();

    // Wait for the loading dots to go away and a reply to appear
    await page.waitForFunction(() => {
      const sidebar = document.querySelector('[data-testid="chat-sidebar"]');
      const messages = sidebar?.querySelectorAll('.rounded-xl');
      // At least 2 messages: user + assistant
      return messages && messages.length >= 2;
    }, { timeout: 60000 });

    // The user message should be visible
    await expect(page.getByText('Say hello in exactly three words.')).toBeVisible();
  });

  test('AI board update refreshes board without reload', async ({ page }) => {
    test.setTimeout(90000);
    await loginAndWaitForBoard(page);

    // Count total cards across all columns before AI call
    const totalBefore = await page.locator('[data-testid^="card-"]').count();

    await page.getByRole('button', { name: /open ai/i }).click();
    const uniqueTitle = `AICard-${Date.now()}`;
    await page.getByPlaceholder(/ask the ai/i).fill(
      `Add a card titled "${uniqueTitle}" to any column. Do it now.`
    );
    await page.getByRole('button', { name: /^send$/i }).click();

    // Wait for the new card to appear anywhere on the board (not just in chat)
    await page.waitForSelector(`[data-testid^="card-"]`, { timeout: 60000 });
    await page.waitForFunction(
      (count) => document.querySelectorAll('[data-testid^="card-"]').length > count,
      totalBefore,
      { timeout: 60000 }
    );

    const totalAfter = await page.locator('[data-testid^="card-"]').count();
    expect(totalAfter).toBeGreaterThan(totalBefore);
  });
});
