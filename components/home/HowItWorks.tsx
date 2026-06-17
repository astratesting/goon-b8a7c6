import { ClipboardList, Hand, Gift, Package2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Take the Gift Quiz",
    description:
      "Not sure what to get? Answer three quick questions and we'll recommend the perfect piece.",
  },
  {
    icon: Hand,
    step: "2",
    title: "Explore the Story",
    description:
      "Every product page shows you the full storycard before you buy — meet the artisan, learn the process.",
  },
  {
    icon: Gift,
    step: "3",
    title: "Choose Your Piece",
    description:
      "Pick a trinket from our curated collections. Each one is crafted in limited quantities.",
  },
  {
    icon: Package2,
    step: "4",
    title: "Give a Meaningful Gift",
    description:
      "Your trinket arrives in a gift-ready box with the artisan's storycard. Ready to give, ready to treasure.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-surface-muted section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-honey-dark">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
            From Quiz to Treasured Gift
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-honey/20">
                <step.icon className="h-7 w-7 text-brand-honey-dark" />
              </div>
              <div className="mx-auto mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-honey text-sm font-bold text-white">
                {step.step}
              </div>
              <h3 className="font-heading text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
