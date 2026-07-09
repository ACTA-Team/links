import type React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { PostHogProvider } from "@/providers/PostHogProvider";
import { TabTitle } from "@/components/ui/tab-title";
import "./globals.css";
import type { Metadata } from "next";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACTA",
  description: "The new infrastructure for digital trust.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <TabTitle awayTitle="Come back · ACTA" />
        <PostHogProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
