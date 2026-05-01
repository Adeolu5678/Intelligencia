import test from "node:test";
import assert from "node:assert/strict";

import {
  getBackgroundAssetQueue,
  getCurrentPageAssetQueue,
  getCurrentPageReadyThreshold,
  getPageAssetPlan,
  normalizeRoutePath,
} from "@/lib/page-preload";

test("home critical assets follow the required loading priority", () => {
  const plan = getPageAssetPlan("/");

  assert.deepEqual(
    plan.critical.map((asset) => asset.id),
    [
      "shared-hero-background",
      "home-hero-panel",
      "shared-lower-background",
      "home-feature-carousel-process-design",
      "home-feature-sections",
      "home-testimonial-james-carter",
    ],
  );
});

test("subpages load hero background first and hero card image second", () => {
  const plan = getPageAssetPlan("/case-studies");

  assert.deepEqual(
    plan.critical.slice(0, 2).map((asset) => asset.id),
    ["shared-hero-background", "case-studies-hero-panel"],
  );
});

test("current page queue contains critical assets before deferred assets", () => {
  const queue = getCurrentPageAssetQueue("/services");

  assert.deepEqual(
    queue.map((asset) => asset.id),
    [
      "shared-hero-background",
      "services-hero-panel",
      "services-core-website-development",
      "services-core-systems-automation",
      "services-core-technology-management",
    ],
  );
});

test("background queue excludes assets already needed by the current page", () => {
  const queue = getBackgroundAssetQueue("/services");
  const ids = queue.map((asset) => asset.id);

  assert.equal(ids.includes("shared-hero-background"), false);
  assert.equal(ids.includes("services-hero-panel"), false);
  assert.equal(ids.includes("home-hero-panel"), true);
  assert.equal(ids.includes("case-studies-hero-panel"), true);
});

test("route normalization collapses unknown and trailing-slash paths safely", () => {
  assert.equal(normalizeRoutePath("/services/"), "/services");
  assert.equal(normalizeRoutePath("/missing-page"), "/");
});

test("ready threshold matches the critical asset count for the current page", () => {
  assert.equal(getCurrentPageReadyThreshold("/"), 6);
  assert.equal(getCurrentPageReadyThreshold("/contact"), 2);
});
