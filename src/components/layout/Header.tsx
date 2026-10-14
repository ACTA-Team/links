"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/ui/logo";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="https://acta.build"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ACTA website"
          className="flex items-center gap-3 rounded-full p-1"
        >
          <Logo priority />
          <span className="eyebrow hidden sm:inline">Links</span>
        </Link>

        <div className="flex items-center gap-2">
          <AnimatedThemeToggler
            duration={550}
            aria-label="Toggle theme"
            className="grid size-9 place-items-center rounded-full border border-border-strong text-foreground/80 transition-colors hover:border-primary/60 hover:text-foreground [&_svg]:size-4"
          />
          <Link
            href="https://dapp.acta.build"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open dApp
          </Link>
        </div>
      </nav>
    </header>
  );
}
