"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  AiCloudIcon,
  Analytics01Icon,
  Briefcase01Icon,
  ComputerSettingsIcon,
  GlobalSearchIcon,
  WebProgrammingIcon,
  WorkflowCircle01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { usePreloadedAssetSrc } from "@/components/asset-preload-provider";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "process-design",
    assetId: "home-feature-carousel-process-design",
    label: "Process Design",
    icon: WorkflowCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    description:
      "We map messy operations into cleaner, scalable workflows that reduce friction and improve execution.",
  },
  {
    id: "website-development",
    assetId: "home-feature-carousel-website-development",
    label: "Website Development",
    icon: WebProgrammingIcon,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium websites designed to sharpen your positioning, communicate trust, and convert serious opportunities.",
  },
  {
    id: "systems-workflows",
    assetId: "home-feature-carousel-systems-workflows",
    label: "Systems & Workflows",
    icon: ComputerSettingsIcon,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Connected tools, automations, and internal systems that give your team clarity and operating leverage.",
  },
  {
    id: "technology-management",
    assetId: "home-feature-carousel-technology-management",
    label: "Technology Management",
    icon: AiCloudIcon,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description:
      "Reliable oversight for the infrastructure, platforms, and technical decisions your business depends on.",
  },
  {
    id: "consulting",
    assetId: "home-feature-carousel-consulting",
    label: "Consulting",
    icon: Briefcase01Icon,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    description:
      "Strategic technology guidance that helps leadership teams make sharper moves with confidence.",
  },
  {
    id: "market-insight",
    assetId: "home-feature-carousel-digital-positioning",
    label: "Digital Positioning",
    icon: GlobalSearchIcon,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sharper messaging and stronger digital presence so your capabilities land with the right audience.",
  },
  {
    id: "performance",
    assetId: "home-feature-carousel-performance-visibility",
    label: "Performance Visibility",
    icon: Analytics01Icon,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description:
      "Dashboards and reporting that surface the metrics leaders need to track progress and spot risk early.",
  },
] as const;

const AUTO_PLAY_INTERVAL = 3200;
const ITEM_HEIGHT = 52;

const wrap = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export interface FeatureCarouselProps {
  className?: string;
}

export function FeatureCarousel({ className }: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) {
      setStep((value) => value + diff);
    }
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [isPaused, nextStep]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const length = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > length / 2) normalizedDiff -= length;
    if (diff < -length / 2) normalizedDiff += length;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className={cn("feature-carousel", className)}>
      <div className="feature-carousel__shell">
        <div className="feature-carousel__rail">
          <div className="feature-carousel__fade feature-carousel__fade--top" />
          <div className="feature-carousel__fade feature-carousel__fade--bottom" />
          <div className="feature-carousel__chips">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.24,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="feature-carousel__chip-wrap"
                >
                  <button
                    type="button"
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "feature-carousel__chip",
                      isActive && "feature-carousel__chip--active"
                    )}
                  >
                    <span className="feature-carousel__chip-icon">
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={17}
                        strokeWidth={2}
                      />
                    </span>
                    <span className="feature-carousel__chip-label">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="feature-carousel__stage">
          <div className="feature-carousel__stack">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -94 : isNext ? 94 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.87 : 0.72,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.34 : 0,
                    rotate: isPrev ? -4 : isNext ? 4 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="feature-carousel__card"
                >
                  <FeatureCarouselImage
                    alt={feature.label}
                    assetId={feature.assetId}
                    className={cn(
                      "feature-carousel__image",
                      !isActive && "feature-carousel__image--inactive"
                    )}
                    src={feature.image}
                  />

                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="feature-carousel__caption"
                      >
                        <div className="feature-carousel__caption-tag">
                          {String(index + 1).padStart(2, "0")} • {feature.label}
                        </div>
                        <p>{feature.description}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "feature-carousel__live",
                      isActive && "feature-carousel__live--active"
                    )}
                  >
                    <span className="feature-carousel__live-dot" />
                    <span>Intelligencia Focus</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;

function FeatureCarouselImage({
  alt,
  assetId,
  className,
  src,
}: {
  alt: string;
  assetId: string;
  className: string;
  src: string;
}) {
  const resolvedSrc = usePreloadedAssetSrc(assetId, src);

  return <img src={resolvedSrc} alt={alt} className={className} />;
}
