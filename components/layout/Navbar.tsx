"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-violet/10 bg-surface/80 backdrop-blur-lg">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold text-brand-violet transition-colors hover:text-brand-violet-dark"
          >
            goon
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/shop"
              className="font-body text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="font-body text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Collections
            </Link>
            <Link
              href="/quiz"
              className="font-body text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Gift Quiz
            </Link>
            <Link href="/shop" className="btn-primary text-sm">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shop Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-ink-muted transition-colors hover:bg-brand-violet/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="border-t border-brand-violet/10 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2 font-body text-base font-medium text-ink-muted transition-colors hover:bg-brand-violet/5 hover:text-ink"
              >
                Shop
              </Link>
              <Link
                href="/collections"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2 font-body text-base font-medium text-ink-muted transition-colors hover:bg-brand-violet/5 hover:text-ink"
              >
                Collections
              </Link>
              <Link
                href="/quiz"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2 font-body text-base font-medium text-ink-muted transition-colors hover:bg-brand-violet/5 hover:text-ink"
              >
                Gift Quiz
              </Link>
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
