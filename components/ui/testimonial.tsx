"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { usePreloadedAssetSrc } from "@/components/asset-preload-provider";

export type AnimatedTestimonialItem = {
  quote: string;
  name: string;
  designation?: string;
  src: string;
  assetId?: string;
  alt: string;
  number?: string;
  includes?: string[];
  href?: string;
};

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
}: {
  testimonials: AnimatedTestimonialItem[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const rotations = useMemo(
    () => testimonials.map((_, index) => `${((index * 7) % 16) - 8}deg`),
    [testimonials],
  );

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay || testimonials.length < 2) return;
    const interval = window.setInterval(handleNext, 5000);
    return () => window.clearInterval(interval);
  }, [autoplay, handleNext, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  const current = testimonials[active];

  return (
    <div className="animated-testimonials">
      <div className="animated-testimonials__grid">
        <div className="animated-testimonials__media">
          <div className="animated-testimonials__image-stack">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const isActive = index === active;

                return (
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.45,
                      rotate: isActive ? "0deg" : rotations[index],
                      scale: isActive ? 1 : 0.92,
                      y: isActive ? 0 : 22,
                      zIndex: isActive
                        ? testimonials.length
                        : testimonials.length - Math.abs(index - active),
                    }}
                    className="animated-testimonials__image-card"
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    initial={{
                      opacity: 0,
                      rotate: rotations[index],
                      scale: 0.9,
                      y: 50,
                    }}
                    key={testimonial.src}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <AnimatedTestimonialImage testimonial={testimonial} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="animated-testimonials__content">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="animated-testimonials__copy"
              exit={{ opacity: 0, y: -20 }}
              initial={{ opacity: 0, y: 20 }}
              key={active}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="animated-testimonials__meta">
                {current.number ? (
                  <span className="animated-testimonials__number">
                    {current.number}
                  </span>
                ) : null}
                <div>
                  {current.designation ? (
                    <p className="service-tag">{current.designation}</p>
                  ) : null}
                  <h3>{current.name}</h3>
                </div>
              </div>

              <p className="animated-testimonials__quote">{current.quote}</p>

              {current.includes ? (
                <div className="animated-testimonials__includes">
                  <span>What it includes</span>
                  <ul>
                    {current.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {current.href ? (
                <Link className="button-ghost" href={current.href}>
                  Learn more
                </Link>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="animated-testimonials__controls">
            <button
              aria-label="Previous service"
              className="animated-testimonials__nav"
              onClick={handlePrev}
              type="button"
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button
              aria-label="Next service"
              className="animated-testimonials__nav"
              onClick={handleNext}
              type="button"
            >
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedTestimonialImage({
  testimonial,
}: {
  testimonial: AnimatedTestimonialItem;
}) {
  const resolvedSrc = usePreloadedAssetSrc(testimonial.assetId, testimonial.src);

  return (
    <Image
      alt={testimonial.alt}
      className="animated-testimonials__image"
      draggable={false}
      fill
      sizes="(max-width: 820px) 82vw, 360px"
      src={resolvedSrc}
    />
  );
}
