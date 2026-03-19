"use client";

import { Suspense } from "react";
import CreatorProfile from "@/views/CreatorProfile";

export default function CreatorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <CreatorProfile />
    </Suspense>
  );
}
