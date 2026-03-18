"use client";

import Link from "next/link";
import { useSettings } from "@/hooks/useSettings";
import { useAuth } from "@/hooks/useAuth";
import AvatarMenu from "@/components/AvatarMenu";
import WalletButton from "@/components/WalletButton";
import NotificationBell from "@/components/NotificationBell";
import VerificationModal from "@/components/VerificationModal";
import { useState } from "react";

const Header = () => {
  const { data: settings } = useSettings();
  const { user } = useAuth();
  const [showVerification, setShowVerification] = useState(false);

  const platformName = settings?.platform_name || "HASHPO";
  const logoUrl = settings?.logo_url;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoUrl} alt={platformName} width={32} height={32} className="rounded-lg object-contain" />
            ) : (
              <span className="text-lg font-bold">{platformName}</span>
            )}
            <span className="hidden sm:inline-block text-muted-foreground text-sm">Videos • Mini Sites • Jobs</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/servicos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Serviços</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link href="/marketplace" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="/directory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Diretório</Link>
            <Link href="/professionais" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Profissões</Link>
            <Link href="/domains" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Domains</Link>
            <Link href="/slugs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Slugs</Link>
            <Link href="/jobs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Jobs</Link>
            <Link href="/cv" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">CV</Link>
            <Link href="/classificados" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Classificados</Link>
            <Link href="/carros" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Carros</Link>
            <Link href="/imoveis" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Imóveis</Link>
            <Link href="/mini-site" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Mini Site</Link>
          </nav>
          <div className="flex items-center gap-2">
            {user && (
              <button
                type="button"
                onClick={() => setShowVerification(true)}
                className="hidden md:flex items-center gap-1 text-primary text-xs font-extrabold transition-colors hover:underline"
              >
                Verificação
              </button>
            )}
            <NotificationBell />
            <WalletButton />
            <AvatarMenu />
          </div>
        </div>
      </header>
      <VerificationModal open={showVerification} onClose={() => setShowVerification(false)} />
    </>
  );
};

export default Header;
