import { Leaf } from "lucide-react";

export function StorycardPreview() {
  return (
    <section id="storycard-preview" className="bg-surface-warm section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-coral">
            Our Secret Ingredient
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
            Every Trinket Comes With a Story
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            This is what makes Goon different. Each piece includes a
            laser-engraved storycard that tells you the artisan&apos;s process, the
            material origin, and the meaning behind the design.
          </p>
        </div>

        {/* Sample Storycard */}
        <div className="mx-auto mt-12 max-w-lg">
          <div className="card overflow-hidden border-brand-honey/30 bg-gradient-to-br from-[#fefce8] to-[#fff7ed] p-8 shadow-lg">
            <div className="flex items-center gap-3 border-b border-brand-violet/10 pb-4">
              <div className="rounded-full bg-brand-violet/10 p-2">
                <Leaf className="h-5 w-5 text-brand-violet" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-ink">
                  Storycard
                </p>
                <p className="text-xs text-ink-muted">
                  Laser-engraved on reclaimed wood veneer
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-light">
                  Artisan
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-ink">
                  Elena Vasquez
                </p>
                <p className="text-sm text-ink-muted">
                  Asheville, North Carolina
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-light">
                  Material Origin
                </p>
                <p className="mt-1 text-sm text-ink">
                  The walnut is salvaged from fallen trees in the Blue Ridge
                  Mountains after seasonal storms. Each piece carries 60–80
                  years of growth rings.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-light">
                  The Process
                </p>
                <p className="mt-1 text-sm text-ink">
                  Elena rough-cuts the walnut blank by hand, then uses a
                  precision laser to etch the compass rose to 0.1mm depth. The
                  brass is cast in a small foundry in Weaverville, then
                  hand-polished with jeweler&apos;s rouge.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-light">
                  The Meaning
                </p>
                <p className="mt-1 text-sm italic text-ink">
                  &ldquo;The compass has guided travelers for millennia. This
                  piece is a reminder that you already have direction inside you
                  — sometimes you just need something to hold onto while you
                  find it.&rdquo;
                </p>
              </div>

              <div className="border-t border-brand-violet/10 pt-4">
                <p className="font-heading text-sm italic text-brand-violet">
                  — Elena, Spring 2026
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-ink-muted">
            This is the storycard that comes with every{" "}
            <strong>Walnut &amp; Brass Compass Keychain</strong>. Every product
            has its own unique story.
          </p>
        </div>
      </div>
    </section>
  );
}
