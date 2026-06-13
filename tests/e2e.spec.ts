import { test, expect, type Page } from "@playwright/test";

const PAGES = ["/", "/projects", "/about", "/contact"];

// Collect console errors per page to assert the site is clean.
function trackConsoleErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  return errors;
}

test.describe("smoke: every page loads cleanly", () => {
  for (const path of PAGES) {
    test(`loads ${path} with 200, title, and footer date`, async ({ page }) => {
      const errors = trackConsoleErrors(page);
      const res = await page.goto(path, { waitUntil: "networkidle" });
      expect(res?.status(), `HTTP status for ${path}`).toBeLessThan(400);

      // Branded title
      await expect(page).toHaveTitle(/Muhammad Grandiv Lava Putra/);

      // Meta description present (SEO)
      const desc = page.locator('head meta[name="description"]');
      await expect(desc).toHaveAttribute("content", /.{40,}/);

      // Last-updated date is rendered in the footer
      await expect(page.locator("footer")).toContainText(/Last updated/i);

      expect(errors, `console errors on ${path}`).toEqual([]);
    });
  }
});

test("home shows the hero name", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Grandiv/i }).first()).toBeVisible();
});

test("projects page lists the latest flagship projects", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByText("RoeTix", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("KreaZcy", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("Credora", { exact: false }).first()).toBeVisible();
});

test("about page reflects the CTO role", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByText(/Chief Technology Officer/i).first()).toBeVisible();
});

test("nav links work", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Projects" }).first().click();
  await expect(page).toHaveURL(/\/projects\/?$/);
});
