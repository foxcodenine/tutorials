import { defineConfig, devices } from "@playwright/test";

const port = 3100;
const appUrl = `http://127.0.0.1:${port}`;
const e2eDbPath = "/tmp/tinynotes-e2e.db";
const authSecret = "e2e-local-secret-for-playwright-validation";

export default defineConfig({
  testDir: "./tests/e2e",
  forbidOnly: !!process.env.CI,
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "html",
  workers: 1,
  use: {
    baseURL: appUrl,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: [
      `rm -f ${e2eDbPath} ${e2eDbPath}-wal ${e2eDbPath}-shm`,
      `DB_PATH=${e2eDbPath} bun run db:migrate`,
      `DB_PATH=${e2eDbPath} APP_URL=${appUrl} AUTH_SECRET=${authSecret} bun run --bun next dev --hostname 127.0.0.1 --port ${port}`,
    ].join(" && "),
    reuseExistingServer: !process.env.CI,
    url: appUrl,
  },
});
