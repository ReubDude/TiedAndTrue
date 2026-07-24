import type { Metadata } from "next";
import { assetPath } from "./asset-path";
import { SiteFooter, SiteHeader } from "./components";
import { ParallaxMotion } from "./parallax-motion";
import "./globals.css";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "TiedAndTrue";
const publicSiteUrl =
  process.env.GITHUB_PAGES === "true"
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER ?? "rudebeans"}.github.io/${repositoryName}`
    : "https://tied-and-true.sites.openai.com";
const socialImageUrl = `${publicSiteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: {
    default: "Tied & True Balloons | Dallas–Fort Worth",
    template: "%s | Tied & True Balloons",
  },
  description:
    "Custom balloon installations, grab-and-go garlands, bouquets, and celebration décor serving Dallas–Fort Worth.",
  icons: {
    icon: assetPath("/favicon.png"),
    shortcut: assetPath("/favicon.png"),
  },
  openGraph: {
    title: "Tied & True Balloons",
    description: "Making Moments Worth Celebrating",
    images: [{ url: socialImageUrl, width: 1732, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tied & True Balloons",
    description: "Making Moments Worth Celebrating",
    images: [socialImageUrl],
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
        <ParallaxMotion />
      </body>
    </html>
  );
}
