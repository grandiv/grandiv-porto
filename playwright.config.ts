import { defineConfig, devices } from "@playwright/test";

// E2E config: builds + serves the static site via `astro preview`, then runs
// Chromium against it. Run with: npm run test:e2e
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run preview",
    url: "http://localhost:4321",
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
