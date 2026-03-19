"use client";

// Shim to convert react-router-dom to Next.js
import NextLink from "next/link";
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";
import { forwardRef, type ReactNode, type ComponentProps } from "react";

// Link component
export const Link = forwardRef<HTMLAnchorElement, ComponentProps<typeof NextLink> & { to?: string }>(
  ({ to, href, children, ...props }, ref) => {
    const finalHref = to || href || "/";
    return (
      <NextLink ref={ref} href={finalHref} {...props}>
        {children}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

// Navigate component (redirect)
export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }
  return null;
}

// useNavigate hook
export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to === -1) router.back();
      else router.forward();
    } else {
      if (options?.replace) {
        router.replace(to);
      } else {
        router.push(to);
      }
    }
  };
}

// useParams hook
export { useParams };

// useSearchParams hook
export function useSearchParamsCompat() {
  const searchParams = useSearchParams();
  return {
    get: (key: string) => searchParams.get(key),
    getAll: (key: string) => searchParams.getAll(key),
    has: (key: string) => searchParams.has(key),
    toString: () => searchParams.toString(),
  };
}

// useLocation hook
export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return {
    pathname,
    search: searchParams.toString() ? `?${searchParams.toString()}` : "",
    hash: typeof window !== "undefined" ? window.location.hash : "",
    state: null,
  };
}

// NavLink component
export const NavLink = forwardRef<
  HTMLAnchorElement,
  ComponentProps<typeof NextLink> & { 
    to?: string;
    className?: string | ((props: { isActive: boolean }) => string);
  }
>(({ to, href, className, children, ...props }, ref) => {
  const pathname = usePathname();
  const finalHref = to || href || "/";
  const isActive = pathname === finalHref || pathname.startsWith(`${finalHref}/`);
  
  const finalClassName = typeof className === "function" 
    ? className({ isActive }) 
    : className;

  return (
    <NextLink ref={ref} href={finalHref} className={finalClassName} {...props}>
      {children}
    </NextLink>
  );
});
NavLink.displayName = "NavLink";

// Outlet (not directly supported, but we can provide a placeholder)
export function Outlet() {
  return null;
}

export default {
  Link,
  Navigate,
  NavLink,
  useNavigate,
  useParams,
  useLocation,
  useSearchParams: useSearchParamsCompat,
  Outlet,
};
