"use client";

import { Suspense } from "react";
import Dashboard from "@/views/Dashboard";

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <Dashboard />
    </Suspense>
  );
}
