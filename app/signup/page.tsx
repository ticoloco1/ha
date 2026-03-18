"use client";

import Auth from "@/views/Auth";

/**
 * /signup — página de criar conta (usa a mesma view Auth em modo signup).
 */
export default function SignupPage() {
  return <Auth defaultMode="signup" />;
}
