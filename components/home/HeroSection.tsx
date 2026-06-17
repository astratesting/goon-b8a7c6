import Link from "next/link";
import { ArrowRight, Gift, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface via-surface to-surface-warm">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-violet/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-coral/5 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-honey/10 blur-3xl" />

      <div className="section-container relative">
        <div className="flex flex-col items-center py-20 text-center lg:py-28">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-violet/20 bg-brand-violet/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-brand-violet" />
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-violet">
              New Collection Just Dropped
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl font-heading text-5xl font-extrabold leading-[1.1] text-ink sm:text-6xl lg:text-7xl">
            Handcrafted Wood &amp; Metal{" "}
            <span className="gradient-warm bg-clip-text text-transparent">
              Trinkets
            </span>{" "}
            with Artisan Storycards
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl">
            Each piece is made by hand in the USA and comes with a laser-engraved
            storycard that tells you who made it, where the materials came from,
            and the meaning behind the design.{" "}
            <strong>This is a gift that tells a story.</strong>
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="btn-primary text-base">
              <Gift className="mr-2 h-5 w-5" />
              Shop the Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/quiz" className="btn-coral text-base">
              <Sparkles className="mr-2 h-5 w-5" />
              Take the Gift Quiz
            </Link>
          </div>

          {/* Storycard Preview CTA */}
          <div className="mt-8">
            <Link
              href="#storycard-preview"
              className="group inline-flex items-center gap-2 rounded-full bg-surface-card px-5 py-3 text-sm font-medium text-ink-muted shadow-sm transition-all hover:text-brand-violet hover:shadow-md"
            >
              <span>See a sample storycard</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
