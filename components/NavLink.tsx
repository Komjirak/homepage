import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname?.startsWith(href.toString() + "/");
    const isPending = false; // Next.js doesn't expose a simple pending state for links like this by default

    const resolvedClassName = typeof className === "function"
      ? className({ isActive, isPending })
      : cn(className, isActive && activeClassName, isPending && pendingClassName);

    return (
      <Link
        ref={ref}
        href={href}
        className={resolvedClassName}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
