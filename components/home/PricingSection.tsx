import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Individual Trinket",
    price: "$25 – $50",
    description:
      "A single handcrafted piece with its artisan storycard. Perfect for a birthday, thank-you, or just-because gift.",
    features: [
      "One handcrafted wood & metal trinket",
      "Laser-engraved artisan storycard",
      "Gift-ready box",
      "Free shipping over $60",
    ],
    cta: "Shop Individual",
    href: "/shop",
    highlight: false,
  },
  {
    name: "Bundle",
    price: "$60 – $80",
    description:
      "Two or three pieces from the same collection, bundled at a discount. Great for couples, siblings, or treating yourself.",
    features: [
      "2–3 curated trinkets",
      "Matching storycards",
      "Premium gift box",
      "Free shipping",
      "Bundle discount (save ~15%)",
    ],
    cta: "Shop Bundles",
    href: "/collections",
    highlight: true,
  },
  {
    name: "Quarterly Subscription",
    price: "$55 – $65 / quarter",
    description:
      "A new limited-release trinket every three months. Subscribers get early access to new collections and exclusive pieces.",
    features: [
      "New trinket every quarter",
      "Exclusive subscriber-only pieces",
      "Early access to new collections",
      "Free shipping always",
      "Cancel anytime",
    ],
    cta: "Join Waitlist",
    href: "/subscribe",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-surface-muted section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-violet">
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
            Choose Your Way to Give
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Whether you want a single piece or a quarterly surprise, there&apos;s
            a Goon option for you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`card relative flex flex-col ${
                tier.highlight
                  ? "border-brand-violet/40 ring-2 ring-brand-violet/20"
                  : ""
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-violet px-4 py-1">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-heading text-xl font-bold text-ink">
                {tier.name}
              </h3>
              <p className="mt-2 font-heading text-3xl font-extrabold text-brand-violet">
                {tier.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {tier.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-violet" />
                    <span className="text-sm text-ink">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={
                  tier.highlight
                    ? "btn-primary mt-8 w-full"
                    : "btn-secondary mt-8 w-full"
                }
              >
                {tier.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
