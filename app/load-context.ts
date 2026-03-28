/**
 * Server-side environment utilities.
 *
 * These values are read from `process.env` at **build time** when routes are
 * pre-rendered. Set them in `.env` (see `.env.example`) before running
 * `npm run build`.
 *
 * @module load-context
 */

/**
 * GitHub username used to construct raw-content URLs when fetching
 * per-project `ABOUT.md` files.
 *
 * @example
 * ```ts
 * import { GITHUB_USERNAME } from "~/load-context";
 * const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${slug}/main/ABOUT.md`;
 * ```
 */
export const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "";
