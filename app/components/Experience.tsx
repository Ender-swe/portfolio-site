/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
import { motion } from 'framer-motion';
import { experience } from '~/data/experience';
import type { ExperienceEntry } from '~/data/experience';
import { fadeUpVariants, staggerContainer } from '~/lib/animations';

// ---------------------------------------------------------------------------
// Sub-component: ExperienceCard
// ---------------------------------------------------------------------------

/** Props for {@link ExperienceCard}. */
interface ExperienceCardProps {
  /** Experience entry to render. */
  entry: ExperienceEntry;
}

/**
 * Card representing a single work-experience position.
 *
 * Displays the organisation, role, location, date range, and bullet-point
 * highlights.
 */
function ExperienceCard({ entry }: ExperienceCardProps) {
  const { organisation, role, location, startDate, endDate, bullets } = entry;

  return (
    <article className='flex flex-col gap-4 rounded-lg border border-[var(--color-surface)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]'>
      {/* Organisation */}
      <h3 className='text-xl font-semibold text-[var(--color-text)]'>{organisation}</h3>

      {/* Role and location */}
      <div className='flex flex-col gap-0.5'>
        <p className='text-sm font-medium text-[var(--color-accent)]'>{role}</p>
        <p className='text-sm text-[var(--color-muted)]'>{location}</p>
      </div>

      {/* Date range */}
      <p className='text-sm text-[var(--color-muted)]'>
        {startDate} – {endDate}
      </p>

      {/* Bullet points */}
      <ul className='flex list-disc flex-col gap-1.5 pl-4 marker:text-[var(--color-accent)]'>
        {bullets.map((bullet) => (
          <li key={bullet} className='text-sm leading-relaxed text-[var(--color-muted)]'>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Section: Experience
// ---------------------------------------------------------------------------

/**
 * Experience section component.
 *
 * Renders all work-experience entries as cards. The section is anchored at
 * `#experience` for in-page navigation.
 *
 * @example
 * ```tsx
 * <Experience />
 * ```
 */
export function Experience() {
  return (
    <section id='experience' className='px-4 py-20'>
      <motion.div
        className='mx-auto flex max-w-5xl flex-col gap-10'
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUpVariants}
          className='text-3xl font-bold text-[var(--color-text)] sm:text-4xl'
        >
          Experience
        </motion.h2>

        {/* Cards */}
        <div className='flex flex-col gap-6'>
          {experience.map((entry) => (
            <motion.div key={entry.organisation} variants={fadeUpVariants}>
              <ExperienceCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
