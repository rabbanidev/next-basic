"use client";

import { useRouter } from "next/navigation";

export default function RedirectButton({ path, children }) {
  const router = useRouter();

  return (
    <button
      className="mt-2 rounded bg-blue-500 text-white text-sm px-3 py-2"
      type="button"
      onClick={() => router.push(path)}
    >
      {children}
    </button>
  );
}
