"use client";

import { Suspense } from "react";
import Exchange from "@/views/Exchange";

export default function ExchangePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <Exchange />
    </Suspense>
  );
}
