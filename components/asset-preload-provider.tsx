"use client";

import {
  createContext,
  use,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

import {
  getCurrentPageAssetQueue,
  normalizeRoutePath,
  type AssetDefinition,
  type RoutePath,
} from "@/lib/page-preload";

type AssetPreloadContextValue = {
  gatedRoute: RoutePath;
  isBootstrapping: boolean;
  progress: number;
  currentLabel: string;
  isAssetLoaded: (assetId: string) => boolean;
};

const INTRO_OVERLAY_KEY = "intelligencia-intro-played";
const INTRO_OVERLAY_MIN_MS = 2200;
const INTRO_OVERLAY_MAX_MS = 3200;

const AssetPreloadContext = createContext<AssetPreloadContextValue | null>(null);

const loadedAssetIds = new Set<string>();
const inFlightAssetLoads = new Map<string, Promise<void>>();

function preloadAsset(asset: AssetDefinition) {
  if (loadedAssetIds.has(asset.id)) {
    return Promise.resolve();
  }

  const inFlight = inFlightAssetLoads.get(asset.id);
  if (inFlight) {
    return inFlight;
  }

  const promise = new Promise<void>((resolve) => {
    const image = new window.Image();
    image.decoding = "async";
    image.fetchPriority = asset.kind === "background" ? "high" : "auto";

    const finalize = () => {
      loadedAssetIds.add(asset.id);
      inFlightAssetLoads.delete(asset.id);
      resolve();
    };

    image.onload = finalize;
    image.onerror = finalize;
    image.src = asset.src;
  });

  inFlightAssetLoads.set(asset.id, promise);
  return promise;
}

function LoadingOverlay({
  currentLabel,
  progress,
  isClosing,
}: {
  currentLabel: string;
  progress: number;
  isClosing: boolean;
}) {
  return (
    <div
      className={`site-loading-overlay${isClosing ? " site-loading-overlay--closing" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page assets"
    >
      <div className="site-loading-overlay__panel">
        <span className="site-loading-overlay__eyebrow">Intelligencia</span>
        <h1>Preparing Greatness</h1>
        <p>{currentLabel}</p>
        <div className="site-loading-overlay__track" aria-hidden="true">
          <div
            className="site-loading-overlay__fill"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
    </div>
  );
}

export function AssetPreloadProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const gatedRouteRef = useRef<RoutePath>(normalizeRoutePath(pathname));
  const [loadedVersion, setLoadedVersion] = useState(0);
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [loadedCriticalCount, setLoadedCriticalCount] = useState(0);
  const [currentLabel, setCurrentLabel] = useState("Loading opening scene");

  useEffect(() => {
    const gatedRoute = gatedRouteRef.current;
    const currentQueue = getCurrentPageAssetQueue(gatedRoute);
    const criticalQueue = currentQueue.slice(0, Math.min(currentQueue.length, 2));
    let disposed = false;
    let hideTimer: number | null = null;
    let closingTimer: number | null = null;

    const hasPlayedIntro =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(INTRO_OVERLAY_KEY) === "1";

    const introDuration = hasPlayedIntro ? 900 : INTRO_OVERLAY_MIN_MS;

    const markLoaded = () => {
      if (!disposed) {
        setLoadedVersion((value) => value + 1);
      }
    };

    const loadSequentially = async (
      assets: AssetDefinition[],
      onAssetLoaded?: (index: number, asset: AssetDefinition) => void,
    ) => {
      await Promise.all(
        assets.map(async (asset, index) => {
          if (disposed) {
            return;
          }

          setCurrentLabel(`Loading ${asset.id.replaceAll("-", " ")}`);
          await preloadAsset(asset);
          markLoaded();
          onAssetLoaded?.(index, asset);
        }),
      );
    };

    const closeOverlay = () => {
      if (disposed) {
        return;
      }

      setCurrentLabel("Opening the page");
      setIsClosing(true);
      closingTimer = window.setTimeout(() => {
        if (disposed) {
          return;
        }

        setIsBootstrapping(false);
        setIsClosing(false);
      }, 520);
    };

    const run = async () => {
      if (disposed) {
        return;
      }

      const overlayReady = Promise.all([
        loadSequentially(criticalQueue, (index) => {
          if (disposed) {
            return;
          }

          setLoadedCriticalCount(index + 1);
        }),
        new Promise<void>((resolve) => {
          hideTimer = window.setTimeout(resolve, introDuration);
        }),
      ]);

      void loadSequentially(currentQueue.slice(criticalQueue.length));

      await overlayReady;

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(INTRO_OVERLAY_KEY, "1");
      }

      closeOverlay();
    };

    void run();

    return () => {
      disposed = true;

      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }

      if (closingTimer) {
        window.clearTimeout(closingTimer);
      }
    };
  }, []);

  const value = useMemo<AssetPreloadContextValue>(
    () => ({
      gatedRoute: gatedRouteRef.current,
      isBootstrapping,
      progress:
        loadedCriticalCount === 0
          ? 0.18
          : Math.min(loadedCriticalCount / 2, 1),
      currentLabel,
      isAssetLoaded: (assetId: string) => {
        void loadedVersion;
        return loadedAssetIds.has(assetId);
      },
    }),
    [currentLabel, isBootstrapping, loadedCriticalCount, loadedVersion],
  );

  return (
    <AssetPreloadContext value={value}>
      {children}
      {isBootstrapping ? (
        <LoadingOverlay
          currentLabel={currentLabel}
          progress={value.progress}
          isClosing={isClosing}
        />
      ) : null}
    </AssetPreloadContext>
  );
}

export function usePreloadedAssetSrc(assetId: string | undefined, src: string) {
  const context = use(AssetPreloadContext);
  const pathname = usePathname();

  if (!context || !assetId) {
    return src;
  }

  const currentRoute = normalizeRoutePath(pathname);
  if (currentRoute !== context.gatedRoute) {
    return src;
  }

  return src;
}
