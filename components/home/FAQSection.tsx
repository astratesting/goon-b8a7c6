const faqs = [
  {
    question: "What exactly is a storycard?",
    answer:
      "A storycard is a laser-engraved card (made from reclaimed wood veneer) that accompanies every Goon trinket. It tells you the artisan's name and location, where the materials came from, the process used to make the piece, and the deeper meaning behind the design. It turns a trinket into a story you can hold.",
  },
  {
    question: "Are these made by hand?",
    answer:
      "Yes. Every Goon piece is made by independent artisans in small workshops across the United States. We use a blend of traditional handcraft techniques (carving, forging, wood-turning) and precision tools (laser engraving, CNC micro-milling) to achieve detail that would be impossible by hand alone.",
  },
  {
    question: "Where do the materials come from?",
    answer:
      "We source materials with transparency. Our walnut is salvaged from fallen Blue Ridge Mountain trees. Our cedar is reclaimed from century-old Vermont fence posts. Our teak comes from decommissioned Maine fishing boats. Every storycard tells you exactly where your piece's materials originated.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 1–2 business days. Standard shipping takes 3–7 business days within the continental US. Orders over $60 ship free. Each piece is packaged in a gift-ready box with the storycard included.",
  },
  {
    question: "Can I return or exchange a piece?",
    answer:
      "We want you to love your Goon trinket. If you're not satisfied, you can return or exchange any unworn piece within 30 days of delivery. Contact us and we'll make it right.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-coral">
              FAQ
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
              Questions? We&apos;ve Got Answers.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-brand-violet/10 bg-surface-card p-6 transition-all hover:border-brand-violet/20"
              >
                <summary className="cursor-pointer font-heading text-lg font-semibold text-ink list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 shrink-0 text-brand-violet transition-transform group-open:rotate-45">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 4V16M4 10H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
