const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "TiedAndTrue";
const basePath =
  process.env.GITHUB_PAGES === "true" ? `/${repositoryName}` : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
