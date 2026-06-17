import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Goon — Handcrafted Wood & Metal Trinkets with Artisan Storycards",
    template: "%s | Goon",
  },
  description:
    "Curated wooden-and-metal trinkets with laser-engraved storycards. Each piece tells the artisan's story. Shop collections, take our gift quiz, and give a gift that means something.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
