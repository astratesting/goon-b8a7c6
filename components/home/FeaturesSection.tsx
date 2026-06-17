import {
  Trees,
  ScrollText,
  Package,
  Gem,
  Truck,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Trees,
    title: "Handcrafted in the USA",
    description:
      "Every piece is made by independent artisans in small workshops across America — not mass-produced overseas.",
  },
  {
    icon: ScrollText,
    title: "Artisan Storycards",
    description:
      "Each trinket includes a laser-engraved storycard revealing the artisan, material origin, process, and deeper meaning.",
  },
  {
    icon: Package,
    title: "Limited Releases",
    description:
      "Collections are released in small batches. When they're gone, they're gone — making each piece genuinely rare.",
  },
  {
    icon: Gem,
    title: "Wood & Metal Duo",
    description:
      "The warmth of natural wood paired with the cool precision of forged metal creates a tactile contrast you can feel.",
  },
  {
    icon: Truck,
    title: "Free Shipping Over $60",
    description:
      "Orders over $60 ship free within the continental US. Each piece is packaged in a gift-ready box with the storycard.",
  },
  {
    icon: Heart,
    title: "Gifts That Mean Something",
    description:
      "Skip the generic gift card. Give a trinket with a story — something the recipient will keep, not stash in a drawer.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-violet">
            Why Goon
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
            Gifts That Tell a Story
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            We believe the best gifts carry meaning. Here&apos;s what makes every
            Goon piece special.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card group">
              <div className="mb-4 inline-flex rounded-2xl bg-brand-violet/10 p-3 transition-colors group-hover:bg-brand-violet/20">
                <feature.icon className="h-6 w-6 text-brand-violet" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
