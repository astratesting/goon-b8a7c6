export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  materials: string;
  collection: string;
  description: string;
  storycard: Storycard;
  images: string[];
  tags: string[];
}

export interface Storycard {
  artisan: string;
  origin: string;
  materialSource: string;
  process: string;
  meaning: string;
  signature: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  theme: string;
  productSlugs: string[];
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "walnut-brass-compass-keychain",
    name: "Walnut & Brass Compass Keychain",
    tagline: "Carry direction with you, wherever you wander.",
    price: 35,
    materials: "Black Walnut · Polished Brass",
    collection: "the-forest-collection",
    description:
      "A pocket-sized compass rose carved from Appalachian black walnut, inlaid with polished brass points. The warm grain of the wood meets the cool gleam of brass, creating a tactile piece that feels both ancient and precise. Each keychain is hand-finished and takes two days to complete.",
    storycard: {
      artisan: "Elena Vasquez",
      origin: "Asheville, North Carolina",
      materialSource:
        "The walnut is salvaged from fallen trees in the Blue Ridge Mountains after seasonal storms. Each piece carries 60-80 years of growth rings.",
      process:
        "Elena rough-cuts the walnut blank by hand, then uses a precision laser to etch the compass rose to 0.1mm depth. The brass is cast in a small foundry in Weaverville, then hand-polished with jeweler's rouge. Final assembly and finishing takes place at her studio overlooking the French Broad River.",
      meaning:
        "The compass has guided travelers for millennia. This piece is a reminder that you already have direction inside you — sometimes you just need something to hold onto while you find it.",
      signature: "— Elena, Spring 2026",
    },
    images: [],
    tags: ["keychain", "walnut", "brass", "compass", "travel"],
  },
  {
    id: "p2",
    slug: "oak-copper-acorn-pendant",
    name: "Oak & Copper Acorn Pendant",
    tagline: "A seed of potential, worn close to the heart.",
    price: 48,
    materials: "English Oak · Forged Copper",
    collection: "the-forest-collection",
    description:
      "An acorn-shaped pendant carved from English oak with a forged copper cap. Suspended on a braided leather cord, this piece celebrates the quiet power of small beginnings. Each pendant is unique — the oak grain pattern never repeats.",
    storycard: {
      artisan: "Elena Vasquez",
      origin: "Asheville, North Carolina",
      materialSource:
        "The oak comes from a 200-year-old tree that stood on the grounds of the Biltmore Estate until it fell during a winter storm in 2024. The estate's forestry team donated select sections to local artisans.",
      process:
        "Each acorn is hand-carved on a lathe, then sanded through six grits to a silken finish. The copper cap is forged in a small propane forge, quenched, and wire-brushed to reveal a warm glow. A natural beeswax finish protects the wood without masking its texture.",
      meaning:
        "An acorn contains an entire oak tree in latent form. This pendant is for anyone standing at the beginning of something — a new job, a new city, a new chapter — wearing the promise of what's to come.",
      signature: "— Elena, Winter 2025",
    },
    images: [],
    tags: ["pendant", "oak", "copper", "acorn", "necklace"],
  },
  {
    id: "p3",
    slug: "maple-steel-leaf-bracelet",
    name: "Maple & Steel Leaf Cuff",
    tagline: "Nature's geometry, forged to last.",
    price: 62,
    materials: "Sugar Maple · Stainless Steel",
    collection: "the-forest-collection",
    description:
      "An open cuff bracelet featuring a laser-cut sugar maple leaf set against a brushed steel band. The leaf's delicate veins are etched in microscopic detail, capturing the fractal beauty of nature's design. Adjustable to fit most wrists.",
    storycard: {
      artisan: "Marcus Chen",
      origin: "Burlington, Vermont",
      materialSource:
        "The maple veneer is sourced from Vermont sugar bushes — the same trees that produce maple syrup each spring. After sap season ends, select branches are harvested for woodworking.",
      process:
        "Marcus photographs actual maple leaves at peak autumn color, then translates the vein patterns into vector paths for laser cutting. The steel band is cold-rolled and brushed to a satin finish. The leaf inlay is set by hand and sealed with a matte lacquer.",
      meaning:
        "Leaves are nature's solar panels — they turn light into life. This cuff is a reminder to seek your own light, to turn whatever you're given into growth.",
      signature: "— Marcus, Autumn 2025",
    },
    images: [],
    tags: ["bracelet", "maple", "steel", "leaf", "cuff"],
  },
  {
    id: "p4",
    slug: "cedar-bronze-ring",
    name: "Cedar & Bronze Signet Ring",
    tagline: "A mark of quiet confidence.",
    price: 55,
    materials: "Aromatic Cedar · Cast Bronze",
    collection: "the-workshop-collection",
    description:
      "A bold signet ring with an aromatic cedar face set in a cast bronze band. The cedar releases a subtle forest scent when warmed by your skin. The flat face can be laser-engraved with custom initials (included in price).",
    storycard: {
      artisan: "Marcus Chen",
      origin: "Burlington, Vermont",
      materialSource:
        "The cedar is reclaimed from century-old fence posts on a family farm in the Champlain Islands. After decades of Vermont winters, the wood is dense, fragrant, and full of character.",
      process:
        "The bronze band is cast using the lost-wax method in Marcus's micro-foundry. The cedar face is turned on a jeweler's lathe to within 0.05mm tolerance. Custom engraving is done with a fiber laser that burns the text into the wood at a microscopic level.",
      meaning:
        "A signet ring was historically a seal of identity — a way to leave your mark. This ring asks: what mark do you want to leave on the world?",
      signature: "— Marcus, Summer 2025",
    },
    images: [],
    tags: ["ring", "cedar", "bronze", "signet", "engraved"],
  },
  {
    id: "p5",
    slug: "ironwood-titanium-bolt-earrings",
    name: "Ironwood & Titanium Bolt Studs",
    tagline: "Strength you can wear every day.",
    price: 42,
    materials: "Desert Ironwood · Titanium",
    collection: "the-workshop-collection",
    description:
      "Minimalist stud earrings with desert ironwood faces mounted on hypoallergenic titanium posts. The ironwood's deep brown grain — so dense it sinks in water — is polished to a glass-like finish. Lightweight, comfortable, and built for daily wear.",
    storycard: {
      artisan: "Marcus Chen",
      origin: "Burlington, Vermont",
      materialSource:
        "Desert ironwood grows only in the Sonoran Desert of Arizona and Mexico. Marcus sources offcuts from a guitar maker in Tucson who uses ironwood for fretboards — the small pieces that would otherwise be discarded become these earrings.",
      process:
        "Each stud starts as a 10mm disc, turned and polished through eight grits. The titanium posts are medical-grade and welded (not glued) to the wood backing. The result is a stud that weighs less than 2 grams.",
      meaning:
        "Ironwood is one of the hardest woods on Earth — it evolved to survive in conditions where nothing else can. These studs are a quiet reminder of your own resilience.",
      signature: "— Marcus, Winter 2026",
    },
    images: [],
    tags: ["earrings", "ironwood", "titanium", "studs", "minimalist"],
  },
  {
    id: "p6",
    slug: "cherry-silver-sunrise-necklace",
    name: "Cherry & Silver Sunrise Pendant",
    tagline: "Every day begins again.",
    price: 78,
    materials: "Wild Cherry · Sterling Silver",
    collection: "the-horizon-collection",
    description:
      "A circular pendant with a wild cherry wood center and a sterling silver horizon line bisecting it. The top half of the cherry is left natural; the bottom half is lightly charred using shou sugi ban technique to create a dark-to-light gradient — a sunrise in wood.",
    storycard: {
      artisan: "Elena Vasquez",
      origin: "Asheville, North Carolina",
      materialSource:
        "The cherry comes from a single tree that grew on Elena's grandmother's property in the Shenandoah Valley. When the tree had to be removed for safety, Elena saved every usable branch.",
      process:
        "The cherry disc is turned on a lathe, then one half is carefully charred with a micro-torch — a technique borrowed from Japanese shou sugi ban wood preservation. The silver horizon line is hand-soldered at 1350°F. The pendant hangs on a 20-inch sterling silver chain.",
      meaning:
        "Sunrise is the universe's daily promise: no matter how dark it got, light returns. This pendant is for anyone who needs that reminder around their neck.",
      signature: "— Elena, Spring 2026",
    },
    images: [],
    tags: ["necklace", "cherry", "silver", "sunrise", "pendant"],
  },
  {
    id: "p7",
    slug: "ebony-gold-moon-phase-brooch",
    name: "Ebony & Gold Moon Phase Brooch",
    tagline: "Wear the rhythm of the sky.",
    price: 80,
    materials: "Gaboon Ebony · 14K Gold Fill",
    collection: "the-horizon-collection",
    description:
      "A striking brooch depicting the eight phases of the moon, carved from Gaboon ebony and accented with 14K gold-fill inlay. The deep black of the ebony makes the gold phases glow. A secure pin back lets you wear it on a lapel, bag, or hat.",
    storycard: {
      artisan: "Elena Vasquez",
      origin: "Asheville, North Carolina",
      materialSource:
        "Gaboon ebony is one of the rarest and blackest woods on Earth, sourced from a sustainable forestry cooperative in Cameroon that plants three trees for every one harvested.",
      process:
        "The moon phases are carved into the ebony surface using a CNC micro-mill running at 20,000 RPM. The gold channels are hand-inlaid with 14K gold-fill wire, then burnished to a seamless finish. The entire piece is sealed with microcrystalline wax to protect against moisture.",
      meaning:
        "The moon doesn't create light — it reflects it. This brooch is a tribute to the people in our lives who reflect the best of us back to ourselves.",
      signature: "— Elena, Summer 2025",
    },
    images: [],
    tags: ["brooch", "ebony", "gold", "moon", "celestial"],
  },
  {
    id: "p8",
    slug: "teak-brass-anchor-bracelet",
    name: "Teak & Brass Anchor Bracelet",
    tagline: "Stay grounded, even on open water.",
    price: 58,
    materials: "Reclaimed Teak · Marine Brass",
    collection: "the-horizon-collection",
    description:
      "A rope-style bracelet with reclaimed teak beads and a marine-grade brass anchor charm. The teak, once part of a fishing boat deck, has been shaped and oiled to a warm golden-brown. The anchor charm is cast from brass that can withstand salt spray without corroding.",
    storycard: {
      artisan: "Marcus Chen",
      origin: "Burlington, Vermont",
      materialSource:
        "The teak is reclaimed from decommissioned fishing boats in Portland, Maine. Boatbuilders prize teak for its natural oils that resist rot — the same oils give these beads their warm luster.",
      process:
        "Each bead is turned, drilled, and hand-oiled with a blend of linseed and citrus oils. The anchor charm is sand-cast using a hand-carved mold, then tumbled with ceramic media for 48 hours to achieve a matte, pebble-like finish.",
      meaning:
        "An anchor doesn't stop the boat from moving — it stops it from drifting. This bracelet is for anyone who wants to explore freely while staying tethered to what matters.",
      signature: "— Marcus, Spring 2026",
    },
    images: [],
    tags: ["bracelet", "teak", "brass", "anchor", "nautical"],
  },
];

export const collections: Collection[] = [
  {
    id: "c1",
    slug: "the-forest-collection",
    name: "The Forest Collection",
    description:
      "Inspired by the deep woods of Appalachia — where black walnut, English oak, and sugar maple grow wild. These pieces carry the patience of trees and the warmth of the forest floor.",
    theme: "Earthy, grounded, timeless",
    productSlugs: [
      "walnut-brass-compass-keychain",
      "oak-copper-acorn-pendant",
      "maple-steel-leaf-bracelet",
    ],
  },
  {
    id: "c2",
    slug: "the-workshop-collection",
    name: "The Workshop Collection",
    description:
      "Born in the glow of a forge and the precision of a lathe. These pieces celebrate the act of making — the relationship between artisan hands and unyielding materials like bronze, titanium, and ironwood.",
    theme: "Industrial, precise, bold",
    productSlugs: [
      "cedar-bronze-ring",
      "ironwood-titanium-bolt-earrings",
    ],
  },
  {
    id: "c3",
    slug: "the-horizon-collection",
    name: "The Horizon Collection",
    description:
      "For those drawn to the edge of the map. Cherry, ebony, teak, and sterling silver come together in pieces inspired by sunrises, moon phases, and the pull of open water.",
    theme: "Expansive, celestial, adventurous",
    productSlugs: [
      "cherry-silver-sunrise-necklace",
      "ebony-gold-moon-phase-brooch",
      "teak-brass-anchor-bracelet",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collection === collectionSlug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export const quizSteps = [
  {
    id: "recipient",
    question: "Who are you shopping for?",
    options: [
      { id: "partner", label: "My partner", icon: "Heart" },
      { id: "friend", label: "A close friend", icon: "Users" },
      { id: "family", label: "Family member", icon: "Home" },
      { id: "self", label: "Myself", icon: "Smile" },
    ],
  },
  {
    id: "occasion",
    question: "What's the occasion?",
    options: [
      { id: "birthday", label: "Birthday", icon: "Cake" },
      { id: "anniversary", label: "Anniversary", icon: "Gem" },
      { id: "graduation", label: "Graduation / New Chapter", icon: "GraduationCap" },
      { id: "just-because", label: "Just because", icon: "Sparkles" },
    ],
  },
  {
    id: "style",
    question: "What's their style?",
    options: [
      { id: "earthy", label: "Earthy & Natural", icon: "Leaf" },
      { id: "bold", label: "Bold & Modern", icon: "Zap" },
      { id: "minimal", label: "Minimal & Clean", icon: "Circle" },
      { id: "adventurous", label: "Adventurous & Free", icon: "Compass" },
    ],
  },
];

export function getQuizRecommendations(answers: Record<string, string>): Product[] {
  const style = answers.style;
  let scored = products.map((p) => {
    let score = 0;
    if (style === "earthy" && p.collection === "the-forest-collection") score += 3;
    if (style === "bold" && p.collection === "the-workshop-collection") score += 3;
    if (style === "minimal" && ["ironwood-titanium-bolt-earrings", "cedar-bronze-ring"].includes(p.slug)) score += 3;
    if (style === "adventurous" && p.collection === "the-horizon-collection") score += 3;
    if (answers.occasion === "anniversary" && p.price >= 48) score += 1;
    if (answers.occasion === "just-because" && p.price <= 55) score += 1;
    if (answers.recipient === "partner" && ["pendant", "necklace", "ring"].some((t) => p.tags.includes(t))) score += 1;
    return { product: p, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 3).map((s) => s.product);
}
