import { motion } from "framer-motion";
import { education } from "~/data/education";
import type { EducationEntry } from "~/data/education";
import { fadeUpVariants, staggerContainer } from "~/lib/animations";

// ---------------------------------------------------------------------------
// Sub-component: EducationCard
// ---------------------------------------------------------------------------

/** Props for {@link EducationCard}. */
interface EducationCardProps {
  /** Education entry to render. */
  entry: EducationEntry;
}

/**
 * Card representing a single education credential.
 *
 * Displays the institution name, degree + field, and graduation date.
 */
function EducationCard({ entry }: EducationCardProps) {
  const { institution, degree, field, graduationDate } = entry;

  return (
    <article className="flex flex-col gap-2 rounded-lg border border-[var(--color-surface)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)] transition-colors">
      {/* Institution */}
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        {institution}
      </h3>

      {/* Degree and field */}
      <p className="text-sm text-[var(--color-muted)]">
        {degree} — {field}
      </p>

      {/* Graduation date */}
      <p className="text-sm text-[var(--color-accent)]">{graduationDate}</p>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Section: Education
// ---------------------------------------------------------------------------

/**
 * Education section component.
 *
 * Renders all education entries as cards. The section is anchored at
 * `#education` for in-page navigation.
 *
 * @example
 * ```tsx
 * <Education />
 * ```
 */
export function Education() {
  return (
    <section id="education" className="px-4 py-20">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]"
        >
          Education
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {education.map((entry) => (
            <motion.div
              key={entry.institution}
              variants={fadeUpVariants}
              className="sm:flex-1 min-w-[260px]"
            >
              <EducationCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
