"use client";

import Link from "next/link";
import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import MiniSiteShowcase from "@/components/home/MiniSiteShowcase";
import DirectorySection from "@/components/home/DirectorySection";
import ServicosSection from "@/components/home/ServicosSection";
import AiChatWidget from "@/components/AiChatWidget";
import { useSettings } from "@/hooks/useSettings";
import type { PlatformSettings } from "@/hooks/useSettings";

export default function HomePage({
  initialSettings,
}: {
  initialSettings?: PlatformSettings | null;
}) {
  const { data: settings } = useSettings();
  const resolved = (settings ?? initialSettings) as PlatformSettings | undefined;
  const platformName = resolved?.platform_name || "HASHPO";

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <MiniSiteShowcase />
        <DirectorySection />
        <ServicosSection />
      </main>
      <footer className="border-t border-border bg-muted/30 py-8 text-center text-sm text-muted-foreground">
        {resolved?.footer_text ||
          "HASHPO IS A TECH PLATFORM. CONTENT IS CREATOR RESPONSIBILITY. © 2026 HASHPO"}
      </footer>
      <AiChatWidget />
    </>
  );
}
