"use client";
import { sideBarItems } from "@/lib/linksData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MarketPlaceSideBar() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2">
      {sideBarItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent" : "bg-transparent"
            )}
          >
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
