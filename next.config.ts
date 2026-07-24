import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "TiedAndTrue";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  assetPrefix: basePath,
  basePath,
  images: {
    // Local Vinext previews do not provide the Cloudflare Images binding used
    // by the production optimizer. The brand artwork is already web-optimized,
    // so serve it directly in every environment.
    unoptimized: true,
  },
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  typescript: {
    // The starter includes Cloudflare-only database modules that are not part
    // of this static site. Vinext types them during its normal build; the
    // GitHub Pages export can safely omit that unrelated worker type check.
    ignoreBuildErrors: isGitHubPages,
  },
};

export default nextConfig;
