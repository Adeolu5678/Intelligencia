"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { usePreloadedAssetSrc } from "@/components/asset-preload-provider";
import { cn } from "@/lib/utils";

export interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  assetId?: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "James Carter",
    title: "COO, Summit Logistics",
    description:
      "Intelligencia didn't just deliver a solution, they transformed our business. Their team is strategic, responsive, and exceptional at what they do.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=900&auto=format&fit=crop",
    assetId: "home-testimonial-james-carter",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Amelia Brooks",
    title: "Director of Operations, Northfield Group",
    description:
      "They brought clarity to messy systems and turned disconnected tools into a process our team could finally trust. Adoption was immediate because the work felt practical from day one.",
    imageUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=900&q=80",
    assetId: "home-testimonial-amelia-brooks",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Daniel Reeves",
    title: "Managing Partner, Meridian Advisory",
    description:
      "From website delivery to workflow automation, every touchpoint felt intentional. They gave us a sharper digital presence and an operating foundation that scales with the business.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80",
    assetId: "home-testimonial-daniel-reeves",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
];

export interface TestimonialCarouselProps {
  className?: string;
  items?: Testimonial[];
}

export function TestimonialCarousel({
  className,
  items = defaultTestimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items.length) {
    return null;
  }

  const currentTestimonial = items[currentIndex];
  const desktopImageSrc = usePreloadedAssetSrc(
    currentTestimonial.assetId,
    currentTestimonial.imageUrl,
  );

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % items.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((index) => (index - 1 + items.length) % items.length);
  };

  return (
    <div className={cn("testimonial-carousel", className)}>
      <div className="testimonial-carousel__desktop">
        <div className="testimonial-carousel__portrait-shell" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="testimonial-carousel__portrait-frame"
            >
              <Image
                src={desktopImageSrc}
                alt={currentTestimonial.name}
                width={420}
                height={460}
                className="testimonial-carousel__portrait"
                sizes="(max-width: 820px) 72vw, (max-width: 1180px) 280px, 320px"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonial-carousel__card">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="testimonial-carousel__content"
            >
              <div className="testimonial-carousel__meta">
                <h3>{currentTestimonial.name}</h3>
                <p>{currentTestimonial.title}</p>
              </div>
              <p className="testimonial-carousel__description">
                {currentTestimonial.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="testimonial-carousel__mobile">
        <div className="testimonial-carousel__mobile-portrait">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Image
                src={desktopImageSrc}
                alt={currentTestimonial.name}
                width={480}
                height={480}
                className="testimonial-carousel__portrait testimonial-carousel__portrait--mobile"
                sizes="(max-width: 820px) 72vw, 480px"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="testimonial-carousel__mobile-copy"
          >
            <div className="testimonial-carousel__meta">
              <h3>{currentTestimonial.name}</h3>
              <p>{currentTestimonial.title}</p>
            </div>
            <p className="testimonial-carousel__description">
              {currentTestimonial.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="testimonial-carousel__navigation">
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous testimonial"
          className="testimonial-carousel__nav-button"
        >
          <ChevronLeft />
        </button>

        <div className="testimonial-carousel__dots">
          {items.map((item, testimonialIndex) => (
            <button
              type="button"
              key={item.name}
              onClick={() => setCurrentIndex(testimonialIndex)}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
              className={cn(
                "testimonial-carousel__dot",
                testimonialIndex === currentIndex &&
                  "testimonial-carousel__dot--active"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonial"
          className="testimonial-carousel__nav-button"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
