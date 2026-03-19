"use client";

import { Suspense } from "react";
import ExchangeIndex from "@/views/ExchangeIndex";

export default function ExchangeIndexPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <ExchangeIndex />
    </Suspense>
  );
}
