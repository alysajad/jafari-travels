import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

// Check the client-supplied prices and durations, itinerary completeness and local assets.
const source = fs.readFileSync("src/data/winter.ts", "utf8");
const code = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
}).outputText;
const { winterPackages, winterInclusions } = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
const expected = [
  ["Kashmir Winter Special", "4N/5D", "₹14,999", "person"],
  ["Kashmir Snow Honeymoon", "5N/6D", "₹21,999", "couple"],
  ["Gulmarg Snow Adventure", "3N/4D", "₹12,999", "person"],
  ["Premium Kashmir Winter Tour", "6N/7D", "₹32,999", "person"],
  ["Christmas & New Year Kashmir", "4N/5D", "₹24,999", "person"],
  ["Kashmir Winter Family Holiday", "5N/6D", "₹19,999", "person"],
];
assert.deepEqual(winterPackages.map((pkg) => [pkg.name, pkg.duration, pkg.price, pkg.priceUnit]), expected);
assert.equal(new Set(winterPackages.map((pkg) => pkg.slug)).size, 6);
assert.equal(new Set(winterPackages.map((pkg) => pkg.image)).size, 6);
for (const pkg of winterPackages) {
  const [, nights, days] = pkg.duration.match(/^(\d+)N\/(\d+)D$/);
  assert.equal(Number(days), Number(nights) + 1);
  assert.equal(pkg.itinerary.length, Number(days), `${pkg.slug}: itinerary length`);
  assert.deepEqual(pkg.itinerary.map((day) => day.day), Array.from({ length: Number(days) }, (_, index) => index + 1));
  assert.deepEqual(pkg.inclusions, winterInclusions);
  assert.equal(pkg.season, "winter");
  assert.ok(pkg.overview && pkg.stayPlan && pkg.audience);
  assert.ok(fs.statSync(`public${pkg.image}`).size > 0, `${pkg.slug}: missing image`);
}
assert.ok(fs.existsSync("public/images/hero-winter.webp"));
console.log("Six winter packages: client prices, durations, inclusions, itineraries and images verified.");
