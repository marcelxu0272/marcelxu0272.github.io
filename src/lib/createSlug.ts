// Adapted from https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/

import { GENERATE_SLUG_FROM_TITLE } from "../config";

export default function (title: string, staticSlug: string) {
  if (!GENERATE_SLUG_FROM_TITLE) return staticSlug;
  // Use staticSlug (filename-based) as fallback when title contains
  // only CJK characters that would produce an empty slug with [^\w-]
  const slugified = title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    // Keep word chars AND CJK characters
    .replace(/[^\w\u4e00-\u9fff\u3400-\u4dbf-]/g, "")
    .replace(/^-+|-+$/g, "");
  return slugified || staticSlug;
}
