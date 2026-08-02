/**
 * Utility to resolve tech stack name to a Simple Icons CDN URL.
 * This avoids having to manually map every icon URL one-by-one.
 * 
 * Simple Icons CDN structure:
 * https://cdn.simpleicons.org/[ICON_SLUG]
 */
export function getTechIconUrl(techName: string): string {
  const name = techName.trim().toLowerCase();

  // Custom mappings for aliases, sub-brands, local assets, or special mappings
  const mappings: Record<string, string> = {
    "sql": "https://cdn.simpleicons.org/mysql",
    "jupyter notebook": "https://cdn.simpleicons.org/jupyter",
    "botble cms": "https://cdn.simpleicons.org/wordpress",
    "tableau": "/assets/icons/tableau.png",
    "power bi": "/assets/icons/powerbi.png",
    "excel": "/assets/icons/excel.png",
  };

  if (mappings[name]) {
    return mappings[name];
  }

  // Slugify tech name to match Simple Icons slug format
  const slug = name
    .replace(/\+/g, "plus")
    .replace(/#/g, "sharp")
    .replace(/\.js\b/g, "dotjs") // e.g. next.js -> nextdotjs
    .replace(/\.net\b/g, "dotnet") // e.g. .net -> dotnet
    .replace(/\./g, "dot") // other dots
    .replace(/\s+/g, "") // remove all spaces
    .replace(/[^a-z0-9]/g, ""); // remove other special characters

  return `https://cdn.simpleicons.org/${slug}`;
}
