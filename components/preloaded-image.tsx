"use client";

import Image, { type ImageProps } from "next/image";

import { usePreloadedAssetSrc } from "@/components/asset-preload-provider";

type PreloadedImageProps = Omit<ImageProps, "src"> & {
  assetId?: string;
  src: string;
};

export function PreloadedImage({
  assetId,
  src,
  ...props
}: PreloadedImageProps) {
  const resolvedSrc = usePreloadedAssetSrc(assetId, src);

  return <Image {...props} src={resolvedSrc} />;
}
