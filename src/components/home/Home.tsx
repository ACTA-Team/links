import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LogoBanner } from "@/components/sections/LogoBanner";
import { LinksList } from "@/components/sections/LinksList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative isolate flex-1 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 size-176 animate-drift rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="bg-rules pointer-events-none absolute inset-0 -z-10 mask-[radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
          <LogoBanner />
          <LinksList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
