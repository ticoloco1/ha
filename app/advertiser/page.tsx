"use client";

import { Suspense } from "react";
import Advertiser from "@/views/Advertiser";

export default function AdvertiserPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <Advertiser />
    </Suspense>
  );
}
