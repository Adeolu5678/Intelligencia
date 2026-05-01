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
  getBackgroundAssetQueue,
  getCurrentPageAssetQueue,
  getCurrentPageReadyThreshold,
  normalizeRoutePath,
  type AssetDefinition,
  type RoutePath,
} from "@/lib/page-preload";

const TRANSPARENT_PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

type AssetPreloadContextValue = {
  gatedRoute: RoutePath;
  isBootstrapping: boolean;
  progress: number;
  currentLabel: string;
  isAssetLoaded: (assetId: string) => boolean;
};

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
}: {
  currentLabel: string;
  progress: number;
}) {
  return (
    <div className="site-loading-overlay" role="status" aria-live="polite" aria-label="Loading page assets">
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
  const [loadedCriticalCount, setLoadedCriticalCount] = useState(0);
  const [currentLabel, setCurrentLabel] = useState("Loading homepage assets");

  useEffect(() => {
    const gatedRoute = gatedRouteRef.current;
    const currentQueue = getCurrentPageAssetQueue(gatedRoute);
    const readyThreshold = getCurrentPageReadyThreshold(gatedRoute);
    let disposed = false;

    const markLoaded = () => {
      if (!disposed) {
        setLoadedVersion((value) => value + 1);
      }
    };

    const loadSequentially = async (
      assets: AssetDefinition[],
      onAssetLoaded?: (index: number, asset: AssetDefinition) => void,
    ) => {
      for (const [index, asset] of assets.entries()) {
        if (disposed) {
          return;
        }

        setCurrentLabel(`Loading ${asset.id.replaceAll("-", " ")}`);
        await preloadAsset(asset);
        markLoaded();
        onAssetLoaded?.(index, asset);
      }
    };

    const run = async () => {
      await loadSequentially(currentQueue.slice(0, readyThreshold), (index) => {
        if (disposed) {
          return;
        }

        setLoadedCriticalCount(index + 1);
      });

      if (disposed) {
        return;
      }

      setCurrentLabel("Opening the page");
      setIsBootstrapping(false);

      await loadSequentially(currentQueue.slice(readyThreshold));
      await loadSequentially(getBackgroundAssetQueue(gatedRoute));
      setCurrentLabel("Assets ready");
    };

    void run();

    return () => {
      disposed = true;
    };
  }, []);

  const value = useMemo<AssetPreloadContextValue>(
    () => ({
      gatedRoute: gatedRouteRef.current,
      isBootstrapping,
      progress:
        loadedCriticalCount === 0
          ? 0.06
          : Math.min(
              loadedCriticalCount /
                Math.max(getCurrentPageReadyThreshold(gatedRouteRef.current), 1),
              1,
            ),
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
        <LoadingOverlay currentLabel={currentLabel} progress={value.progress} />
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

  return context.isAssetLoaded(assetId) ? src : TRANSPARENT_PLACEHOLDER;
}
