"use client";

import { Suspense } from "react";
import VideoDetail from "@/views/VideoDetail";

export default function VideoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <VideoDetail />
    </Suspense>
  );
}
