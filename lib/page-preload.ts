export type RoutePath =
  | "/"
  | "/about"
  | "/case-studies"
  | "/contact"
  | "/services"
  | "/services/systems-automation"
  | "/services/technology-management"
  | "/services/website-development";

export type AssetKind = "image" | "background";

export type AssetDefinition = {
  id: string;
  kind: AssetKind;
  src: string;
};

export type PageAssetPlan = {
  critical: AssetDefinition[];
  deferred: AssetDefinition[];
};

const HERO_BACKGROUND: AssetDefinition = {
  id: "shared-hero-background",
  kind: "background",
  src: "/concept-c/hero-building.png",
};

const LOWER_BACKGROUND: AssetDefinition = {
  id: "shared-lower-background",
  kind: "background",
  src: "/concept-c/operations-building-v2.png",
};

const HOME_HERO_PANEL: AssetDefinition = {
  id: "home-hero-panel",
  kind: "image",
  src: "/images/home/home-hero-primary-visual.png",
};

const HOME_FEATURE_SECTIONS: AssetDefinition = {
  id: "home-feature-sections",
  kind: "image",
  src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
};

const HOME_FEATURE_CAROUSEL_ASSETS: AssetDefinition[] = [
  {
    id: "home-feature-carousel-process-design",
    kind: "image",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "home-feature-carousel-website-development",
    kind: "image",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "home-feature-carousel-systems-workflows",
    kind: "image",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "home-feature-carousel-technology-management",
    kind: "image",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "home-feature-carousel-consulting",
    kind: "image",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "home-feature-carousel-digital-positioning",
    kind: "image",
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "home-feature-carousel-performance-visibility",
    kind: "image",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

const HOME_TESTIMONIAL_ASSETS: AssetDefinition[] = [
  {
    id: "home-testimonial-james-carter",
    kind: "image",
    src: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "home-testimonial-amelia-brooks",
    kind: "image",
    src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "home-testimonial-daniel-reeves",
    kind: "image",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80",
  },
];

const ROUTE_PLANS: Record<RoutePath, PageAssetPlan> = {
  "/": {
    critical: [
      HERO_BACKGROUND,
      HOME_HERO_PANEL,
      LOWER_BACKGROUND,
      HOME_FEATURE_CAROUSEL_ASSETS[0],
      HOME_FEATURE_SECTIONS,
      HOME_TESTIMONIAL_ASSETS[0],
    ],
    deferred: [
      ...HOME_FEATURE_CAROUSEL_ASSETS.slice(1),
      ...HOME_TESTIMONIAL_ASSETS.slice(1),
    ],
  },
  "/about": {
    critical: [
      HERO_BACKGROUND,
      {
        id: "about-hero-panel",
        kind: "image",
        src: "/images/about/about-hero-brand-philosophy-visual.png",
      },
    ],
    deferred: [],
  },
  "/case-studies": {
    critical: [
      HERO_BACKGROUND,
      {
        id: "case-studies-hero-panel",
        kind: "image",
        src: "/images/case-studies/case-studies-hero-proof-visual.png",
      },
      {
        id: "case-studies-spotlight",
        kind: "image",
        src: "/images/case-studies/case-studies-featured-landscape-alt-generated.png",
      },
      {
        id: "case-studies-signal-portrait",
        kind: "image",
        src: "/concept-c/testimonial-portrait.png",
      },
    ],
    deferred: [],
  },
  "/contact": {
    critical: [
      HERO_BACKGROUND,
      {
        id: "contact-hero-panel",
        kind: "image",
        src: "/images/contact/contact-hero-consultation-visual.png",
      },
    ],
    deferred: [],
  },
  "/services": {
    critical: [
      HERO_BACKGROUND,
      {
        id: "services-hero-panel",
        kind: "image",
        src: "/images/services/services-hero-service-model-visual.png",
      },
      {
        id: "services-core-website-development",
        kind: "image",
        src: "/images/services/website-development/website-development-hero-visual.png",
      },
    ],
    deferred: [
      {
        id: "services-core-systems-automation",
        kind: "image",
        src: "/images/services/systems-automation/systems-automation-hero-visual.png",
      },
      {
        id: "services-core-technology-management",
        kind: "image",
        src: "/images/services/technology-management/technology-management-hero-visual.png",
      },
    ],
  },
  "/services/systems-automation": {
    critical: [
      HERO_BACKGROUND,
      {
        id: "systems-automation-hero-panel",
        kind: "image",
        src: "/images/services/systems-automation/systems-automation-hero-visual.png",
      },
    ],
    deferred: [],
  },
  "/services/technology-management": {
    critical: [
      HERO_BACKGROUND,
      {
        id: "technology-management-hero-panel",
        kind: "image",
        src: "/images/services/technology-management/technology-management-hero-visual.png",
      },
    ],
    deferred: [],
  },
  "/services/website-development": {
    critical: [
      HERO_BACKGROUND,
      {
        id: "website-development-hero-panel",
        kind: "image",
        src: "/images/services/website-development/website-development-hero-visual.png",
      },
    ],
    deferred: [],
  },
};

function dedupeAssets(assets: AssetDefinition[]) {
  const seen = new Set<string>();
  return assets.filter((asset) => {
    if (seen.has(asset.id)) {
      return false;
    }

    seen.add(asset.id);
    return true;
  });
}

export function normalizeRoutePath(pathname: string): RoutePath {
  const cleanPath = pathname.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";

  if (cleanPath in ROUTE_PLANS) {
    return cleanPath as RoutePath;
  }

  return "/";
}

export function getPageAssetPlan(pathname: string): PageAssetPlan {
  const route = normalizeRoutePath(pathname);
  const plan = ROUTE_PLANS[route];

  return {
    critical: dedupeAssets(plan.critical),
    deferred: dedupeAssets(plan.deferred.filter((asset) => !plan.critical.some((critical) => critical.id === asset.id))),
  };
}

export function getCurrentPageAssetQueue(pathname: string) {
  const plan = getPageAssetPlan(pathname);
  return dedupeAssets([...plan.critical, ...plan.deferred]);
}

export function getBackgroundAssetQueue(pathname: string) {
  const currentRoute = normalizeRoutePath(pathname);
  const seen = new Set(getCurrentPageAssetQueue(currentRoute).map((asset) => asset.id));
  const queue: AssetDefinition[] = [];

  for (const route of Object.keys(ROUTE_PLANS) as RoutePath[]) {
    if (route === currentRoute) {
      continue;
    }

    for (const asset of getCurrentPageAssetQueue(route)) {
      if (seen.has(asset.id)) {
        continue;
      }

      seen.add(asset.id);
      queue.push(asset);
    }
  }

  return queue;
}

export function getCurrentPageReadyThreshold(pathname: string) {
  return getPageAssetPlan(pathname).critical.length;
}
