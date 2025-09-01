"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: Package,
    title: "Advanced Component Pack",
    subtitle: "Version 2.1.0 • Feb 2025",
    description:
      "Ruixen UI now ships with an advanced component pack including complex layouts, enterprise-ready data tables, and animated navigation menus.",
    items: [
      "New Data Grid with sorting, filtering, and pagination",
      "Kanban board with drag-and-drop support",
      "Animated mega menu component",
      "Masonry grid layout for galleries and portfolios",
      "Extended accessibility support across all components",
    ],
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-gradient.png",
    button: {
      url: "https://ruixenui.com",
      text: "Explore Components",
    },
  },
  {
    icon: Sparkles,
    title: "Theme Builder & Design Tokens",
    subtitle: "Version 2.0.0 • Jan 2025",
    description:
      "We've introduced a fully customizable theme builder powered by design tokens so you can tailor Ruixen UI to match any brand identity.",
    items: [
      "Real-time theme preview in the dashboard",
      "Customizable color palettes, typography, and spacing",
      "Preset themes for quick project setup",
      "Export tokens to CSS variables or JSON",
    ],
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-01.png",
  },
  {
    icon: Zap,
    title: "Motion & Interaction Update",
    subtitle: "Version 1.8.0 • Dec 2024",
    description:
      "Micro-interactions across Ruixen UI have been enhanced with Framer Motion, delivering a smoother and more engaging user experience.",
    items: [
      "Animated dropdown menus and modals",
      "Smooth transitions between pages",
      "Custom easing curves for a premium feel",
      "Reduced layout shift for better stability",
    ],
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-02.png",
  },
  {
    icon: Calendar,
    title: "Initial Pro Release",
    subtitle: "Version 1.5.0 • Oct 2024",
    description:
      "Ruixen UI Pro is here — a premium set of components, templates, and utilities designed for production-grade applications.",
    items: [
      "Full Figma design kit",
      "Extended form components with validation",
      "Chart components with Recharts integration",
      "Ready-to-use dashboard layouts",
    ],
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-06.png",
    button: {
      url: "https://ruixenui.com/pro",
      text: "View Ruixen UI Pro",
    },
  },
];

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
  title = "Ruixen UI Release Notes",
  description = "Stay up to date with the latest components, features, and performance enhancements in Ruixen UI — built to help you design and ship faster.",
  entries = defaultEntries,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create stable setters for refs inside map
  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    // We observe small sentinels placed near the title of each card. Whichever
    // sentinel is closest to the vertical center of the viewport becomes active.
    // Using IntersectionObserver to track visibility + a rAF loop to pick the closest.

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      // Compute distance of each sentinel to viewport center
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  // Optional: ensure the first card is active on mount
  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <entry.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {entry.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel near the card title to measure proximity to viewport center */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-2xl border p-3 transition-all duration-300 " +
                    (isActive
                      ? "border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-black shadow-lg"
                      : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black")
                  }
                >
                  {entry.image && (
                    <img
                      src={entry.image}
                      alt={`${entry.title} visual`}
                      className="mb-4 w-full h-72 rounded-lg object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="space-y-4">
                    {/* Header with improved typography */}
                    <div className="space-y-2">
                      <h2
                        className={
                          "text-md font-medium leading-tight tracking-tight md:text-lg transition-colors duration-200 " +
                          (isActive ? "text-foreground" : "text-foreground/70")
                        }
                      >
                        {entry.title}
                      </h2>
                      
                      {/* Improved description with better spacing */}
                      <p
                        className={
                          "text-xs leading-relaxed md:text-sm transition-all duration-300 " +
                          (isActive 
                            ? "text-muted-foreground line-clamp-none" 
                            : "text-muted-foreground/80 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Enhanced expandable content */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive 
                          ? "grid-rows-[1fr] opacity-100" 
                          : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-4">
                              <ul className="space-y-2">
                                {entry.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex} 
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end">
                              <Button 
                                variant="default" 
                                size="sm"
                                className="group hover:bg-primary hover:text-primary-foreground font-normal transition-all duration-200" 
                                asChild
                              >
                                <a href={entry.button.url} target="_blank" rel="noreferrer">
                                  {entry.button.text} 
                                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}