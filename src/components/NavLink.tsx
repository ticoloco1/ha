"use client";

import { NavLink as RouterNavLink } from "@/lib/react-router-shim";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<ComponentProps<typeof RouterNavLink>, "className"> {
  className?: string | ((props: { isActive: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
  to?: string;
  href?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, href, ...props }, ref) => {
    const finalClassName = typeof className === "function" 
      ? className 
      : ({ isActive }: { isActive: boolean }) => cn(className, isActive && activeClassName);
    
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        href={href}
        className={finalClassName}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
