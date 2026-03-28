import type { Config } from "@react-router/dev/config";
import { projects } from "./app/data/projects";

/** Slugs for projects that have an ABOUT.md detail page. */
const detailSlugs = projects
  .filter((p) => p.hasAbout)
  .map((p) => `/projects/${p.slug}`);

export default {
  ssr: false,
  // Pre-render the home page plus every project detail page that has an
  // ABOUT.md (i.e. hasAbout === true). Add slugs to app/data/projects.ts
  // to include new detail pages in the static build.
  prerender: ["/", ...detailSlugs],
} satisfies Config;
