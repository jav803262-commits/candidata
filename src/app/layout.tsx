import type { Metadata } from "next";
import { Playfair_Display, Inter, Parisienne, Cinzel } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/navigation/MobileActionBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${playfair.variable} ${inter.variable} ${parisienne.variable} ${cinzel.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-paper">
        <script
          type="application/ld+json"
          // JSON-LD: Organization mínimo. Ver src/lib/schema.ts
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
