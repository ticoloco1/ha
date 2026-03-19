"use client";

import { Suspense } from "react";
import Link from "next/link";
import MiniSiteEditor from "@/views/MiniSiteEditor";
import { isSupabaseConfigured } from "@/integrations/supabase/client";

export default function MiniSiteEditPage() {
  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-xl border border-amber-500/50 bg-amber-500/5 p-6 text-center space-y-4">
          <h1 className="text-lg font-semibold text-foreground">Supabase não configurado</h1>
          <p className="text-sm text-muted-foreground">
            Para o editor funcionar, configure no Vercel (ou no ambiente de deploy) as variáveis:
          </p>
          <code className="block text-left text-xs bg-muted p-3 rounded-lg break-all">
            NEXT_PUBLIC_SUPABASE_URL<br />
            NEXT_PUBLIC_SUPABASE_ANON_KEY
          </code>
          <p className="text-xs text-muted-foreground">
            Vercel → Project → Settings → Environment Variables
          </p>
          <Link href="/" className="inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Carregando...</div>}>
      <MiniSiteEditor />
    </Suspense>
  );
}
