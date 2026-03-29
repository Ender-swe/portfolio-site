/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
/**
 * Site-wide constants for profile information shown throughout the portfolio.
 *
 * Most values are hardcoded for this deployment. `PHONE_NUMBER` is the
 * exception — it reads from `PORTFOLIO_PHONE` at runtime so the number stays
 * out of source control.
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
export const GITHUB_USERNAME = 'Ender-swe';

/** Full display name shown in the Hero section. */
export const NAME = 'Eduardo Turcios';

/** Contact email address shown in the Hero section.
 * Falls back to a placeholder if `PORTFOLIO_EMAIL` is not set.
 */
export const EMAIL_ADDRESS = process.env.PORTFOLIO_EMAIL ?? 'Email on live website';

/**
 * Contact phone number shown in the Hero section.
 * Falls back to a placeholder if `PORTFOLIO_PHONE` is not set.
 */
export const PHONE_NUMBER = process.env.PORTFOLIO_PHONE ?? 'Phone on live website';

/** LinkedIn profile slug used to build the profile URL in the Hero section. */
export const LINKEDIN_SLUG = 'e-turcios-software-engineer';
