"use client";

import Image, { type ImageProps } from "next/image";

import { usePreloadedAssetSrc } from "@/components/asset-preload-provider";

type PreloadedImageProps = Omit<ImageProps, "src"> & {
  assetId?: string;
  src: string;
};

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiMwODE5MjciIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMTUyYTM4IiBvZmZzZXQ9IjUwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwYTIwMmUiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIvPjwvc3ZnPg==";

export function PreloadedImage({
  assetId,
  src,
  ...props
}: PreloadedImageProps) {
  const resolvedSrc = usePreloadedAssetSrc(assetId, src);

  return (
    <Image
      {...props}
      src={resolvedSrc}
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
    />
  );
}
