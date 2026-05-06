import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

const password = "secret123";

function uniqueEmail(label: string) {
  return `${label}-${Date.now()}-${Math.random().toString(36).slice(2)}@example.com`;
}

async function register(page: Page, email: string) {
  await page.goto("/register");
  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: "Create account" }).click();

  await expect(page).toHaveURL(/\/notes$/);
  await expect(page.getByRole("heading", { name: /Welcome back,/ })).toBeVisible();
}

async function logout(page: Page) {
  await page.getByRole("button", { name: "Logout" }).click();
  await expect(page).toHaveURL(/\/login$/);
}

async function createNote(page: Page, title: string, body?: string) {
  await page.getByRole("link", { name: "New note" }).click();
  await expect(page).toHaveURL(/\/notes\/new$/);
  await page.getByLabel("Title").fill(title);

  if (body) {
    await page.locator(".ProseMirror").click();
    await page.keyboard.type(body);
  }

  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page).toHaveURL(/\/notes\/(?!new$)[^/]+$/);
}

test.describe("TinyNotes e2e", () => {
  test("redirects public and protected routes correctly", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

    await page.goto("/notes");
    await expect(page).toHaveURL(/\/login$/);

    await page.getByRole("link", { name: "Create one" }).click();
    await expect(page).toHaveURL(/\/register$/);
    await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();

    await page.getByRole("link", { name: "Log in" }).click();
    await expect(page).toHaveURL(/\/login$/);
  });

  test("shows a safe error for invalid login", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Email").fill(uniqueEmail("invalid-login"));
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Sign in" }).click();

    await expect(page.getByText("Invalid email or password.")).toBeVisible();
  });

  test("registers, rejects duplicate registration, and logs out", async ({ page }) => {
    const email = uniqueEmail("duplicate");

    await register(page, email);
    await logout(page);

    await page.goto("/register");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: "Create account" }).click();

    await expect(page.getByText("Could not create your account.")).toBeVisible();
  });

  test("creates and edits notes", async ({ page }) => {
    await register(page, uniqueEmail("notes-flow"));
    await expect(page.getByRole("heading", { name: "No notes yet" })).toBeVisible();

    await createNote(page, "First note", "First note body");
    const firstNoteUrl = page.url();

    await expect(page.getByRole("heading", { name: "First note" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Saved" })).toBeDisabled();

    await page.getByRole("link", { name: "Back to notes" }).click();
    await expect(page).toHaveURL(/\/notes$/);
    await expect(page.getByRole("link", { name: /First note/ })).toBeVisible();

    await page.getByRole("link", { name: /First note/ }).click();
    await expect(page).toHaveURL(firstNoteUrl);
    await page.getByLabel("Title").fill("Updated first note");
    await page.locator(".ProseMirror").click();
    await page.keyboard.press(process.platform === "darwin" ? "Meta+A" : "Control+A");
    await page.keyboard.type("Updated body");
    await page.getByRole("button", { name: "Save" }).click();

    await expect(page.getByRole("button", { name: "Saved" })).toBeDisabled();
    await page.getByRole("link", { name: "Back to notes" }).click();
    await expect(page.getByRole("link", { name: /Updated first note/ })).toBeVisible();
  });

  test("supports untitled notes", async ({ page }) => {
    await register(page, uniqueEmail("untitled"));

    await createNote(page, "");
    await expect(page.getByRole("heading", { name: "Untitled note" })).toBeVisible();

    await page.getByRole("link", { name: "Back to notes" }).click();
    await expect(page.getByRole("link", { name: /Untitled note/ })).toBeVisible();
  });

  test("prevents users from opening another user's note", async ({ page }) => {
    await register(page, uniqueEmail("owner"));
    await createNote(page, "Private note");
    const privateNoteUrl = page.url();
    await logout(page);

    await register(page, uniqueEmail("other-user"));
    await page.goto(privateNoteUrl);

    await expect(page.getByRole("heading", { name: "404 — Not found" })).toBeVisible();
  });

  test("renders current placeholder public shared note page", async ({ page }) => {
    await page.goto("/s/example-token");

    await expect(page.getByRole("heading", { name: "Shared note" })).toBeVisible();
    await expect(page.getByText("Token: example-token")).toBeVisible();
    await expect(page.getByText("Shared note content goes here.")).toBeVisible();
  });

  test("renders the custom 404 page for unknown routes", async ({ page }) => {
    await page.goto("/missing-page");

    await expect(page.getByRole("heading", { name: "404 — Not found" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Go back home" })).toBeVisible();
  });
});
