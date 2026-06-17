# Goon Build Plan

## 1. PRODUCT

Goon is a curated DTC gift shop that pairs handcrafted wooden-and-metal trinkets (keychains, rings, charms, pendants) with laser-engraved storycards revealing the artisan's name, location, material source, and origin story. The product turns a physical trinket into a narrative gift — the buyer doesn't just send an object, they send a story about who made it, where the wood came from, and why it matters. This solves three concrete pains from the friction research: (1) visitors land on a generic-looking page and assume "just another Etsy store" — fixed with a story-forward hero and a visible storycard preview; (2) the storycard (the secret weapon) is hidden until checkout — fixed with a modal preview and inline thumbnail; (3) shoppers feel overwhelmed by 50+ SKUs and abandon — fixed with a 3-step Gift Finder Quiz that returns a single recommendation in under 60 seconds.

## 2. WHO IT'S FOR

**ICP:** Time-poor young professional, 28-38, urban/suburban, $50-80 gift budget, browsing on phone during commute. Skeptical of "handmade" claims, wants proof of authenticity. Gifting anxiety is the dominant emotion — they're not buying for themselves, they're buying for a recipient who must love it.

**Product decisions driven by ICP:**
- **Mobile-first layouts.** The hero, storycard modal, and quiz must work perfectly at 375px width.
- **One primary CTA per screen.** No choice paralysis. Hero = "Shop the Collection" or "How It Works" (two only, because one is informational). Quiz = one big tap target per option, auto-advances.
- **Proof over marketing.** Storycard preview is the proof artifact. Show it before asking for signup.
- **No fake social proof.** No invented testimonials, no "10,000 customers" claims, no press logos. The storycard does the trust work.
- **No product grid on landing.** The landing sells the *category* (handcrafted + storycard) and routes the buyer to the Quiz or Shop. Product pages come later.
- **Dashboard is spartan.** This user logs in to check an order or update their password — three nav items, no upsells.

## 3. LOOK & FEEL

### Visual System

**Vibe:** Warm Catalyst — tactile, story-driven, premium but human. Aesop meets a Brooklyn craft fair. Not luxury-precious, not boho-hippie, not corporate. The storycard is the brand's hero artifact and everything else is supporting.

**Color palette (Tailwind extension):**
- `brand.cream` `#fefce8` — page background, storycard surface
- `brand.violet` `#7c3aed` — primary CTAs, links, brand accent, active nav state
- `brand.coral` `#f97316` — secondary CTA (Quiz, "limited" highlights)
- `brand.honey` `#f59e0b` — storycard borders, "new"/"limited" badges, decorative dividers
- `brand.ink` `#1a1a2e` — primary text
- `brand.stone` `#6b7280` — secondary text, metadata
- `brand.surface` `#ffffff` — card surfaces, modal background

**Typography:**
- Headings: **Manrope** 600/700/800. Display (hero h1) = `text-5xl md:text-6xl font-extrabold tracking-tight`. h2 = `text-3xl md:text-4xl font-bold`. h3 = `text-xl font-semibold`.
- Body: **Source Sans 3** 400/500/600. Body = `text-base md:text-lg leading-relaxed`. Small = `text-sm text-stone-600`.
- Eyebrows/badges: `text-xs font-semibold uppercase tracking-wider`.

**Spacing/layout:**
- 8px base grid. Section vertical rhythm: `py-20 md:py-28`. Container: `max-w-7xl mx-auto px-6`.
- Cards: `rounded-2xl`, `p-8`, `bg-white`, `border border-stone-100`, `shadow-sm hover:shadow-md transition-shadow`.
- Buttons: `rounded-full`, `px-6 py-3` (md), `px-8 py-4` (lg). Primary = solid violet with white text + subtle shadow. Secondary = white bg with violet border. Coral variant for Quiz.
- Corners: rounded-2xl on cards, rounded-full on pills/buttons, rounded-3xl on modals.

**Key components (built once, reused):**
- `<PillButton variant="violet|coral|outline" size="md|lg">` — every CTA in the app
- `<StorycardFrame>` — cream surface, honey 2px border, decorative corner marks, contains artisan name + location + story
- `<StorycardModal>` — backdrop-blur overlay, scale-in animation, esc-to-close, focus trap
- `<MetricCard>` — large number (text-4xl font-bold violet), label, optional icon
- `<EmptyState icon title description actionLabel onAction>` — used in Orders/Wishlist
- `<SectionHeader eyebrow title subtitle>` — used to start every landing section
- `<Logo>` — "Goon" wordmark in Manrope 800 with a small sparkle/spark icon prefix
- `<Sidebar navItems currentPath onSignOut user>` — dashboard nav

**Iconography:** Lucide React — `Sparkles`, `TreePine`, `Gift`, `User`, `Package`, `Heart`, `LogOut`, `Menu`, `X`, `ArrowRight`, `Check`, `Star`, `Leaf`, `Hammer`.

**Imagery (honest placeholders):**
- Trinket images: SVG silhouettes of keychain/ring/pendant shapes on gradient backgrounds (violet→coral). No fake product photos.
- Storycard trinket art: simple geometric wood-grain pattern using SVG (concentric rings in honey/stone tones).
- No stock photos, no human faces, no logos. Founder replaces with real product photos later.

**Motion:**
- Sections: `fade-up` on scroll (intersection observer, 200ms stagger).
- Modal: scale 0.95→1 + opacity 0→1, 200ms ease-out, backdrop fade.
- Buttons: `active:scale-[0.98] transition-transform`.
- Quiz option selection: violet ring + checkmark, 150ms.
- No spinning loaders longer than 400ms. Skeletons for any data fetch.

### Screens (top to bottom)

**Landing page (`/`):**

1. **Sticky NavBar** (h-16, bg-white/85 backdrop-blur, border-b stone-100): Logo left, links center (`Shop`, `How It Works`, `Gift Finder`), right side has `Sign In` (text link) + `Sign Up` (PillButton violet sm). Mobile: hamburger → slide-down panel.
2. **Hero** (pt-32 pb-20, max-w-4xl text-center): Honey pill badge `✦ Curated Limited Releases`, h1 "Handcrafted Trinkets. Artisan Stories. Unforgettable Gifts." (3 lines on desktop, gradient text on key phrase), subhead "Each Goon piece pairs a laser-engraved wooden-and-metal trinket with a storycard that reveals its artisan origin.", two buttons (`Shop the Collection` violet lg + `How It Works` outline lg). Below: row of 3 small storycard thumbnails (clickable, opens modal). Background: soft violet→cream radial gradient blob.
3. **Features Grid** (6 cards, `grid md:grid-cols-3 gap-6`): each card icon (violet or coral, h-12 w-12) + h3 + p. Cards: *Handcrafted* (Hammer), *Storycards* (ScrollText), *Limited Releases* (Sparkles), *Wood + Metal* (TreePine), *Quarterly Subscription* (Package), *Meaningful Gifts* (Gift). All honest feature copy, no invented stats.
4. **Storycard Preview Section** (2-column md): left = SectionHeader + paragraph + `Preview Full Storycard` PillButton (outline). Right = inline `<StorycardFrame>` with sample data (Artisan: "Mira Okonkwo, Portland OR. Material: Salvaged Maple + Brass. Story snippet: 2-3 sentences about the wood sourcing and craft."). Button opens modal.
5. **Gift Finder Section** (centered, max-w-3xl): coral pill eyebrow `60-Second Gift Finder`, h2 "Find the perfect gift without the scroll", subhead "Three questions, one recommendation. No endless browsing.", `Start the Quiz` PillButton (coral lg). Below: 3 step icons (1, 2, 3) in a row with labels.
6. **Pricing Section** (3 tiers in `grid md:grid-cols-3 gap-6`): *Individual* ($25-$50, "Perfect for one meaningful gift"), *Bundle* (highlighted, "Most Popular" coral ribbon, $60-$80, "Two or more pieces, save on the second"), *Quarterly* ($55-$65/quarter, "A new storycard every season"). Each card has 3-4 feature bullets, `Get Started` button (violet for first/third, coral for highlighted middle). Buttons link to `/signup` for now.
7. **FAQ Section** (max-w-3xl, accordion): 5 items, default closed, first one open. Q: "What exactly is a storycard?" / "Where are the trinkets made?" / "How long does shipping take?" / "Can I include a personal message?" / "How does the Quarterly plan work?".
8. **Footer** (bg-ink text-cream): 4 columns — Brand+tagline, Shop (Gift Finder, Individual, Bundle, Quarterly), Company (About, Story, Contact), Support (FAQ, Shipping, Returns). Bottom: copyright + legal links.

**Sign up (`/signup`):**

- Centered card (max-w-md mt-24). Cream-50 page bg.
- Logo top, h1 "Create your account", subhead "Track orders, save gifts, get early access to new releases."
- Form fields: `Full name` (text), `Email` (email), `Password` (password, show/hide toggle, min 8 chars), `Confirm password` (password).
- Submit button `Create Account` (violet lg, full width).
- Below: "Already have an account? Sign in" link.
- Inline error states: red border + message below field. Server errors show in a coral banner above the form.

**Sign in (`/login`):**

- Same layout shell as sign up. h1 "Welcome back". Fields: `Email`, `Password`. Submit `Sign In`. Link "Don't have an account? Sign up".
- If `?redirect=/dashboard` is in URL, show small note "Sign in to continue to your dashboard".

**Auth confirm (`/auth/confirm`):**

- Server route that reads `token_hash` and `type` from search params, calls `supabase.auth.verifyOtp()`, redirects to `/dashboard` on success or `/login?error=expired` on failure. Shows a brief loading state via a tiny static page if visited directly.

**Gift Finder Quiz (`/gift-finder`):**

- Top: progress bar (h-1.5, violet fill, animated width transition).
- Step header: "Step {n} of 3" eyebrow, h2 = the question.
- 4 large option cards in 2x2 grid (`grid grid-cols-2 gap-4`), each h-32, white surface, border-2 stone-100, hover:border-violet-300, selected:border-violet-600 + checkmark icon. Each card has icon (h-8 w-8) + label (text-lg font-semibold) + 1-line description.
- Steps:
  - Step 1: "Who are you shopping for?" → Partner, Friend, Family Member, Myself
  - Step 2: "What's the occasion?" → Birthday, Anniversary, Just Because, Milestone
  - Step 3: "What's their style?" → Minimalist, Bold, Nature-inspired, Classic
- Click auto-advances after 200ms (brief selection animation). Back link at top-left if step > 1.
- Step 1 → `/gift-finder?step=2&recipient=partner`. Step 2 → `?step=3&recipient=...&occasion=...`. Step 3 → `/gift-finder/results?...`.
- No "next" button needed; selection is the action.

**Quiz Results (`/gift-finder/results`):**

- Reads `recipient`, `occasion`, `style` from URL. Maps to a hardcoded product (see Core Features).
- Layout: h1 "Your perfect match" + small "Personalized for {recipient} · {occasion}". Product card (max-w-xl, white, rounded-3xl, shadow-lg): top half = trinket image placeholder (gradient bg + SVG silhouette), bottom half = product name (h2), price (text-2xl font-bold violet), "Why this gift" reasoning paragraph (2 sentences explaining the match), two buttons: `Take Quiz Again` (outline) + `Browse All Gifts` (violet).
- Empty state if params missing: redirect to `/gift-finder`.

**Dashboard layout (`/dashboard/*`):**

- Flex container, min-h-screen, bg-stone-50.
- **Sidebar** (w-64 fixed left, bg-white border-r): Logo top (pt-6), nav items (px-4, py-3 each, rounded-xl, icon h-5 w-5 + label text-sm font-medium, active state = bg-violet-50 text-violet-700), items: Dashboard (LayoutGrid), My Orders (Package), Wishlist (Heart), Account (User). Bottom: Sign Out button (LogOut icon, stone text, hover coral).
- **Main area** (ml-64 flex-1): top bar (h-16, bg-white border-b, px-8, flex justify-between items-center) shows page title on left and user email on right. Content area (p-8 md:p-10, max-w-6xl).
- Mobile: sidebar hidden, top bar has hamburger that opens a slide-over drawer.

**Dashboard