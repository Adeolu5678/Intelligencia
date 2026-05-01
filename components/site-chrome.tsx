"use client";

import { usePathname } from "next/navigation";

import { FloatingNavbar } from "@/components/floating-navbar";

export function SiteChrome() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <FloatingNavbar />;
}
