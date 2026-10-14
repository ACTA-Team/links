import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { PostHogProvider } from "@/providers/PostHogProvider";
import { TabTitle } from "@/components/ui/tab-title";
import "./globals.css";

// Same faces as acta.build and the dApp, so every ACTA surface reads as one system.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ACTA · Links",
  description: "Every official ACTA link in one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        {/* Restores the chosen theme before the first paint, so there is no
            flash of the wrong one. Dark is the default; only an explicit
            choice of light turns it off. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{if(localStorage.getItem("theme")!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full bg-background font-sans text-foreground">
        <TabTitle awayTitle="Come back · ACTA" />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
