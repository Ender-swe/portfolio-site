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

/**
 * Full display name shown in the Hero section.
 * Set via the `PORTFOLIO_NAME` environment variable.
 */
export const PORTFOLIO_NAME = process.env.PORTFOLIO_NAME ?? "";

/**
 * Contact email address shown in the Hero section.
 * Set via the `PORTFOLIO_EMAIL` environment variable.
 */
export const PORTFOLIO_EMAIL = process.env.PORTFOLIO_EMAIL ?? "";

/**
 * Contact phone number shown in the Hero section.
 * Set via the `PORTFOLIO_PHONE` environment variable.
 */
export const PORTFOLIO_PHONE = process.env.PORTFOLIO_PHONE ?? "";

/**
 * LinkedIn profile URL shown in the Hero section.
 * Set via the `PORTFOLIO_LINKEDIN_URL` environment variable.
 */
export const PORTFOLIO_LINKEDIN_URL = process.env.PORTFOLIO_LINKEDIN_URL ?? "";
