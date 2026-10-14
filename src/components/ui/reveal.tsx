"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Lightweight scroll-reveal wrapper. Adds `.in-view` (fade + rise) once the
 * element enters the viewport. Respects prefers-reduced-motion via CSS.
 */
export function Reveal({
  className,
  delay = 0,
  as: Tag = "div",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
