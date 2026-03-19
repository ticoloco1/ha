"use client";

import { Suspense } from "react";
import Admin from "@/views/Admin";

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <Admin />
    </Suspense>
  );
}
