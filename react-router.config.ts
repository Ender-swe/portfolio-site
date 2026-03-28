import type { Config } from "@react-router/dev/config";

export default {
  // Pre-render all static routes to HTML at build time for static hosting.
  // Dynamic routes (e.g. /projects/:slug) must be explicitly listed here
  // once project slugs are known (see issue #9).
  prerender: true,
} satisfies Config;
