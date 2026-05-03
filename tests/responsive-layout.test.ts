import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const globalsCss = readFileSync(join(process.cwd(), "app", "globals.css"), "utf8");
const floatingNavbarSource = readFileSync(
  join(process.cwd(), "components", "floating-navbar.tsx"),
  "utf8",
);

test("tablet and small laptop breakpoint releases viewport-locked sections", () => {
  assert.match(globalsCss, /@media\s*\(max-width:\s*1279px\)/);
  assert.match(
    globalsCss,
    /@media\s*\(max-width:\s*1279px\)[\s\S]*?\.services-viewport\s*\{[\s\S]*?height:\s*auto;/,
  );
  assert.match(
    globalsCss,
    /@media\s*\(max-width:\s*1279px\)[\s\S]*?\.operations-viewport\s*\{[\s\S]*?grid-template-columns:\s*1fr;/,
  );
  assert.match(
    globalsCss,
    /@media\s*\(max-width:\s*1279px\)[\s\S]*?\.about-viewport\s*\{[\s\S]*?grid-template-columns:\s*1fr;/,
  );
});

test("tablet and small laptop breakpoint disables fixed scene attachments", () => {
  assert.match(
    globalsCss,
    /@media\s*\(max-width:\s*1279px\)[\s\S]*?\.sticky-scene,[\s\S]*?background-attachment:\s*scroll;/,
  );
});

test("subpage hero avoids vw-based widths that can force horizontal overflow", () => {
  assert.doesNotMatch(globalsCss, /width:\s*calc\(100vw\s*-\s*36px\)/);
});

test("floating navigation switches to compact mode for tablets and small laptops", () => {
  assert.match(floatingNavbarSource, /max-width:\s*1023px/);
  assert.match(globalsCss, /@media\s*\(max-width:\s*1023px\)/);
});
