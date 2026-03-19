"use client";

import { Suspense } from "react";
import SubdomainAuction from "@/views/SubdomainAuction";

export default function SubdomainAuctionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <SubdomainAuction />
    </Suspense>
  );
}
