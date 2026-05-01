import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingDock from "@/components/FloatingDock";

import { siteConfig } from "@/lib/config";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.metadata.title,
    template: `%s | ${siteConfig.personal.name}`,
  },
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  authors: [{ name: siteConfig.metadata.author }],
  creator: siteConfig.metadata.author,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.metadata.siteUrl,
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.siteName,
    images: [
      {
        url: siteConfig.metadata.image,
        width: 1200,
        height: 630,
        alt: siteConfig.metadata.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: [siteConfig.metadata.image],
    creator: "@ifalfahri", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
  },
  metadataBase: new URL(siteConfig.metadata.siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={cn(outfit.variable, "font-sans bg-background text-foreground overflow-x-hidden")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="noise-bg" />
            <SmoothScroll>
              <main className="relative z-10">{children}</main>
            </SmoothScroll>
            <FloatingDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
