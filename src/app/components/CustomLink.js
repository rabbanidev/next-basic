"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, children }) {
  const pathname = usePathname();

  const active = pathname === path;

  return (
    <Link href={path} className={active ? "text-blue-500" : ""}>
      {children}
    </Link>
  );
}
