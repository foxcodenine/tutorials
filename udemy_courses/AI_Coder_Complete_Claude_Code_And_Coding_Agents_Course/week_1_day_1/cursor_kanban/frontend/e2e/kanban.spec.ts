import { expect, test } from "@playwright/test";

test("loads the board with five columns and seed cards", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Kanban MVP" })).toBeVisible();
  await expect(page.getByTestId("kanban-board").locator("section")).toHaveCount(5);
  await expect(page.getByText("Research competitors")).toBeVisible();
  await expect(page.getByText("Polish UI")).toBeVisible();
});

test("renames a column", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("column-title-col-backlog").click();
  const input = page.getByTestId("column-title-input-col-backlog");
  await input.fill("Ideas");
  await input.press("Enter");

  await expect(page.getByTestId("column-title-col-backlog")).toHaveText("Ideas");
});

test("adds a card to a column", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("add-card-button-col-backlog").click();
  await page.getByLabel("Card title").fill("Write docs");
  await page.getByLabel("Card details").fill("Document setup and usage.");
  await page
    .getByTestId("add-card-form")
    .getByRole("button", { name: "Add card", exact: true })
    .click();

  await expect(page.getByText("Write docs")).toBeVisible();
  await expect(page.getByText("Document setup and usage.")).toBeVisible();
});

test("deletes a card", async ({ page }) => {
  await page.goto("/");

  const card = page.getByTestId("card-card-1");
  await card.hover();
  await page.getByRole("button", { name: "Delete card Research competitors" }).click();

  await expect(page.getByText("Research competitors")).not.toBeVisible();
});

test("drags a card to another column", async ({ page }) => {
  await page.goto("/");

  const dragHandle = page.getByRole("button", { name: "Drag card Define color tokens" });
  const targetColumn = page.getByTestId("column-col-done");

  const handleBox = await dragHandle.boundingBox();
  const targetBox = await targetColumn.boundingBox();
  if (!handleBox || !targetBox) throw new Error("Could not measure drag targets");

  await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    targetBox.x + targetBox.width / 2,
    targetBox.y + targetBox.height / 2,
    { steps: 20 }
  );
  await page.mouse.up();

  await expect(page.getByTestId("column-col-done").getByText("Define color tokens")).toBeVisible();
  await expect(
    page.getByTestId("column-col-backlog").getByText("Define color tokens")
  ).not.toBeVisible();
});

test("reorders cards within a column", async ({ page }) => {
  await page.goto("/");

  const backlog = page.getByTestId("column-col-backlog");
  const firstCardHandle = page.getByRole("button", { name: "Drag card Research competitors" });
  const secondCard = page.getByTestId("card-card-2");

  const handleBox = await firstCardHandle.boundingBox();
  const targetBox = await secondCard.boundingBox();
  if (!handleBox || !targetBox) throw new Error("Could not measure drag targets");

  await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    targetBox.x + targetBox.width / 2,
    targetBox.y + targetBox.height / 2,
    { steps: 20 }
  );
  await page.mouse.up();

  const cardTitles = backlog.locator("h3");
  await expect(cardTitles.nth(0)).toHaveText("Define color tokens");
  await expect(cardTitles.nth(1)).toHaveText("Research competitors");
});
