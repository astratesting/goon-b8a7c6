import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-brand-violet/10 bg-surface-muted">
      <div className="section-container section-padding">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-brand-violet"
            >
              goon
            </Link>
            <p className="mt-3 max-w-md text-sm text-ink-muted">
              Curated wooden-and-metal trinkets with artisan storycards. Each
              piece is handcrafted in small batches by makers who care about
              materials, process, and meaning.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-ink">
              Shop
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  Gift Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-ink">
              Company
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/story"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/story#artisans"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-violet/10 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-ink-light">
            Made with <Heart className="h-3 w-3 fill-brand-coral text-brand-coral" /> by artisans in the USA
          </p>
          <p className="text-sm text-ink-light">
            &copy; {new Date().getFullYear()} Goon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
