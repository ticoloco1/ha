"use client";

import { Suspense } from "react";
import Studio from "@/views/Studio";

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <Studio />
    </Suspense>
  );
}
