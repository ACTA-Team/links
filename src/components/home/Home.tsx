import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LogoBanner } from "@/components/sections/LogoBanner";
import { LinksList } from "@/components/sections/LinksList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background transition-colors">
      <Header />

      <main className="flex flex-grow items-center justify-center px-4 py-6 md:py-12">
        <div className="w-full max-w-[90%] rounded-2xl border border-border bg-card/60 p-4 shadow-sm transition-colors sm:max-w-3xl sm:p-6 md:p-8 lg:max-w-5xl">
          <div className="flex flex-col items-center">
            <LogoBanner />
            <LinksList />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
