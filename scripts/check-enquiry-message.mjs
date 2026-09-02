import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

const source = fs.readFileSync("src/lib/whatsapp.ts", "utf8");
const code = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`;
const { formatEnquiryMessage, whatsappLink } = await import(moduleUrl);
const message = formatEnquiryMessage({
  enquiryType: "Package booking enquiry",
  request: "I would like to book Classic Kashmir.",
  details: { Package: "Classic Kashmir", "Travel Date": "2026-10-10", Notes: "" },
});

assert.match(message, /^Hi Jaffari Sky Travels,/);
assert.match(message, /Enquiry Type: Package booking enquiry/);
assert.match(message, /- Package: Classic Kashmir/);
assert.doesNotMatch(message, /Notes:/);
assert.equal(new URL(whatsappLink(message)).searchParams.get("text"), message);

console.log("Enquiry message formatting check passed.");
