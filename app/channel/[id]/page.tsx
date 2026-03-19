"use client";

import { Suspense } from "react";
import Channel from "@/views/Channel";

export default function ChannelPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <Channel />
    </Suspense>
  );
}
