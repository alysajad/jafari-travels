// With a local Vite server running, use Playwright from your test environment:
// PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/check-seasons.mjs
// Optional: BASE_URL and CHROMIUM_PATH (an existing browser executable).
import assert from "node:assert/strict";

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const base = process.env.BASE_URL || "http://127.0.0.1:5173";
const errors = [];

async function open(page, path = "/") {
  await page.goto(`${base}${path}`);
  await page.getByRole("button", { name: "Close enquiry form" }).click();
}

function toggle(page, season) {
  return page.getByRole("group", { name: "Travel season" }).getByRole("button", { name: season, exact: true });
}

async function selected(page, season) {
  assert.equal(await toggle(page, season).getAttribute("aria-pressed"), "true");
}

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  page.on("pageerror", (error) => errors.push(error.message));
  await open(page);
  await selected(page, "Winter");
  assert.equal(await page.getByRole("heading", { name: "Explore Winter Packages" }).count(), 1);
  const select = page.locator('select[name="Select Package"]');
  const winterOptions = await select.locator("option").allTextContents();
  assert.ok(winterOptions.includes("Kashmir Winter Special"));
  assert.ok(winterOptions.includes("Winter Wonderland Kashmir"));
  assert.ok(!winterOptions.includes("Classic Kashmir"));
  await select.selectOption("Kashmir Snow Honeymoon");
  const date = new Date();
  date.setDate(date.getDate() + 10);
  const travelDate = date.toISOString().slice(0, 10);
  await page.getByLabel("Check-in", { exact: true }).fill(travelDate);
  await toggle(page, "Summer").focus();
  await page.keyboard.press("Enter");
  await selected(page, "Summer");
  assert.equal(await page.getByLabel("Check-in", { exact: true }).inputValue(), travelDate);
  assert.equal(await select.inputValue(), "", "Changing season clears the old package selection");
  assert.equal(await page.getByRole("heading", { name: "Explore Summer Packages" }).count(), 1);
  const summerOptions = await select.locator("option").allTextContents();
  assert.ok(summerOptions.includes("Classic Kashmir"));
  assert.ok(!summerOptions.includes("Winter Wonderland Kashmir"));
  await select.selectOption("Classic Kashmir");
  await page.getByRole("button", { name: "Enquire Now", exact: true }).first().click();
  assert.equal(await page.getByRole("dialog").locator('select[name="Package"]').inputValue(), "Classic Kashmir");
  await page.getByRole("button", { name: "Close enquiry form" }).click();

  // Navigation and filters must use the same season as the homepage.
  await page.getByRole("link", { name: /View All Offers/ }).click();
  await page.getByRole("heading", { name: `${summerOptions.length - 2} Summer Packages Found` }).waitFor();
  await selected(page, "Summer");
  assert.equal(await page.getByRole("heading", { name: "Included in your winter holiday" }).count(), 0);
  await page.getByLabel("Honeymoon", { exact: true }).check();
  await toggle(page, "Winter").click();
  assert.equal(await page.getByLabel("Honeymoon", { exact: true }).isChecked(), false);
  await page.getByRole("heading", { name: `${winterOptions.length - 2} Winter Packages Found` }).waitFor();
  await page.locator("select").selectOption("Price: Low to High");
  assert.equal(await page.locator("h4").filter({ hasText: "Gulmarg Snow Adventure" }).count(), 1);
  await page.getByRole("button", { name: "Load More Packages" }).click();
  assert.equal(await page.getByRole("heading", { name: "Winter Wonderland Kashmir", exact: true }).count(), 1);
  await page.getByRole("heading", { name: "Included in your winter holiday" }).waitFor();
  await toggle(page, "Summer").click();
  await page.reload();
  await page.getByRole("button", { name: "Close enquiry form" }).click();
  await selected(page, "Summer");

  // A shared winter detail URL still works when the visitor chose summer.
  await open(page, "/kashmir-packages/kashmir-winter-special");
  await page.getByRole("heading", { name: "Kashmir Winter Special", exact: true }).waitFor();
  await page.getByRole("link", { name: "Winter Packages", exact: true }).click();
  await selected(page, "Winter");
  await page.getByRole("link", { name: "Home", exact: true }).first().click();
  await page.getByRole("heading", { name: "Explore Winter Packages" }).waitFor();

  // Mobile hit targets, no overflow/overlap, and reduced motion.
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 768]) {
    await page.setViewportSize({ width, height: 900 });
    for (const season of ["Summer", "Winter"]) {
      await toggle(page, season).click();
      await selected(page, season);
      const group = await page.getByRole("group", { name: "Travel season" }).boundingBox();
      const form = await page.locator("main > section").nth(1).boundingBox();
      assert.ok(group.x >= 0 && group.x + group.width <= width, "Toggle fits viewport");
      assert.ok(group.y + group.height < form.y, "Toggle stays above the booking panel");
      assert.ok((await toggle(page, season).boundingBox()).height >= 44);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
  }
  const transition = await page.getByRole("group", { name: "Travel season" }).locator("span[aria-hidden]").evaluate((el) => getComputedStyle(el).transitionProperty);
  assert.equal(transition, "none");

  // Storage restrictions must not prevent choosing a season.
  const privatePage = await browser.newPage();
  privatePage.on("pageerror", (error) => errors.push(error.message));
  await privatePage.addInitScript(() => Object.defineProperty(window, "sessionStorage", { get() { throw new Error("Storage unavailable"); } }));
  await open(privatePage);
  await selected(privatePage, "Winter");
  await toggle(privatePage, "Summer").click();
  await selected(privatePage, "Summer");
  assert.deepEqual(errors, []);
  console.log("Season toggle verified: homepage, package options, booking enquiry, listing, navigation, reload, mobile, keyboard, reduced motion and unavailable storage.");
} finally {
  await browser.close();
}
