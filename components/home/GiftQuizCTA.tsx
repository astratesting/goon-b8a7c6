import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function GiftQuizCTA() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-violet to-brand-violet-dark p-10 sm:p-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-honey/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5">
              <Sparkles className="mr-2 h-4 w-4 text-brand-honey-light" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-white/90">
                Not sure what to pick?
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Find the Perfect Gift in 30 Seconds
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Answer three quick questions and we&apos;ll recommend the ideal
              trinket for your person and occasion. No endless scrolling.
            </p>
            <Link
              href="/quiz"
              className="btn-coral mt-8 inline-flex bg-white text-brand-violet hover:bg-white/90 hover:text-brand-violet-dark"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Take the Gift Quiz
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
