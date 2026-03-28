/**
 * Static education data for the portfolio.
 *
 * Each entry describes one academic credential.
 *
 * @module data/education
 */

/** A single education entry. */
export interface EducationEntry {
  /** Name of the institution. */
  institution: string;
  /** Degree awarded. */
  degree: string;
  /** Field of study. */
  field: string;
  /** Month and year the degree was (or will be) awarded (e.g. "Aug 2025"). */
  graduationDate: string;
}

/** All education entries, ordered most-recent first. */
export const education: EducationEntry[] = [
  {
    institution: "University at Buffalo",
    degree: "BS",
    field: "Computer Science",
    graduationDate: "Aug 2025",
  },
  {
    institution: "Borough of Manhattan Community College",
    degree: "AS",
    field: "Computer Science",
    graduationDate: "Feb 2022",
  },
];
