"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, Settings, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar({ workspaceId }: { workspaceId: string }) {
  const pathname = usePathname();

  const navItems = [
    {
      href: `/dashboard/${workspaceId}`,
      label: "Overview",
      icon: Home,
    },
    {
      href: `/dashboard/${workspaceId}/trades`,
      label: "Trades",
      icon: LineChart,
    },
    {
      href: `/dashboard/${workspaceId}/settings`,
      label: "Settings",
      icon: Settings,
    },
    {
      href: `/dashboard/${workspaceId}/billing`,
      label: "Billing",
      icon: ShoppingCart,
    },
  ];

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 border-r bg-background">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Workspace</h2>
      </div>
      <nav className="p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname === item.href && "bg-muted text-primary"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
