"use client";

import { Suspense } from "react";
import ExchangeFutures from "@/views/ExchangeFutures";

export default function ExchangeFuturesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <ExchangeFutures />
    </Suspense>
  );
}
