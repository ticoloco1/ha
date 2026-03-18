import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 to-background py-20 md:py-28">
    <div className="container px-4">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Your professional presence starts here
        </h1>
        <p className="text-xl text-muted-foreground">
          Links, Videos, CV & Portfolio — all in one page
        </p>
        <p className="text-muted-foreground">
          Build your personal page with paywall videos, professional CV, photo gallery, social links and more.
          Companies pay to unlock your CV. You earn 50% of every unlock.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Globe className="h-4 w-4" />
            Create Your Mini Site
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            How It Works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
