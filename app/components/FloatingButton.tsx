"use client";

import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link
      href="/reservation"
      className="fixed bottom-10 right-10 z-40 bg-primary text-on-primary w-16 h-16 rounded-full flex items-center justify-center diffusion-glow transition-all hover:scale-110 active:scale-95 group shadow-2xl"
    >
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
      <span className="absolute right-full mr-4 bg-background px-4 py-2 rounded-lg text-primary type-caption whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-primary/20">
        منوی آنلاین
      </span>
    </Link>
  );
}
