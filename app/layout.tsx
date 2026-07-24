import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tied-and-true.sites.openai.com"),
  title: {
    default: "Tied & True Balloons | Dallas–Fort Worth",
    template: "%s | Tied & True Balloons",
  },
  description:
    "Custom balloon installations, grab-and-go garlands, bouquets, and celebration décor serving Dallas–Fort Worth.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Tied & True Balloons",
    description: "Making Moments Worth Celebrating",
    images: [{ url: "/og.png", width: 1732, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tied & True Balloons",
    description: "Making Moments Worth Celebrating",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
