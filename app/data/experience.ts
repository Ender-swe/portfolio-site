/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
/**
 * Static work-experience data for the portfolio.
 *
 * Each entry describes one position held.
 *
 * @module data/experience
 */

/** A single work-experience entry. */
export interface ExperienceEntry {
  /** Name of the organisation. */
  organisation: string;
  /** Job title or role. */
  role: string;
  /** Location of the position. */
  location: string;
  /** Start date string (e.g. "Jan 2015"). */
  startDate: string;
  /** End date string, or "Present" for current roles. */
  endDate: string;
  /** Bullet-point highlights for this position. */
  bullets: string[];
}

/** All experience entries, ordered most-recent first. */
export const experience: ExperienceEntry[] = [
  {
    organisation: 'US Marine Corps',
    role: 'Operational Supervisor',
    location: 'Camp Pendleton, CA',
    startDate: 'Jan 2015',
    endDate: 'Jan 2019',
    bullets: [
      'Managed training schedules for 200+ personnel; awarded Navy/Marine Corps Achievement Medal',
      'Supervised a team of 10 and developed internal operational tools',
    ],
  },
];
