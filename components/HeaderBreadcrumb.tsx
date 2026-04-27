"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderBreadcrumb() {
  const pathname = usePathname();
  // this probably isnt the best way to do this but whatever
  // i will kill myself if someone decides to fix this code
  const crumbMap: Record<string, { href: string; label: string }> = {
    "/installation": { href: "/installation", label: "Installation" },
    "/configuration": { href: "/configuration", label: "Configuration" },
    "/usage": { href: "/usage", label: "Usage" },
    "/troubleshooting": { href: "/troubleshooting", label: "Troubleshooting" },
  };
  const crumb = crumbMap[pathname];

  return (
    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.09em] text-muted-foreground">
      <Link href="https://asteride.dev" className="transition-colors hover:text-primary">
        AsterIDE
      </Link>
      <span className="text-border">/</span>
      <Link href="/" className="transition-colors hover:text-primary">
        Docs
      </Link>
      {crumb && (
        <>
          <span className="text-border">/</span>
          <Link href={crumb.href} className="transition-colors hover:text-primary">
            {crumb.label}
          </Link>
        </>
      )}
    </div>
  );
}
