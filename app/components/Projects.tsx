/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
import { motion } from 'framer-motion';
import { GITHUB_USERNAME } from '~/load-context';
import { projects } from '~/data/projects';
import type { Project } from '~/data/projects';
import { fadeUpVariants, staggerContainer } from '~/lib/animations';
import { Link } from 'react-router';

// ---------------------------------------------------------------------------
// Sub-component: ProjectCard
// ---------------------------------------------------------------------------

/** Props for {@link ProjectCard}. */
interface ProjectCardProps {
  /** Project data to render. */
  project: Project;
}

/**
 * Card representing a single portfolio project.
 *
 * Renders the project name (linked to the detail page when `hasAbout` is
 * `true`), a short description, bullet-point highlights, tech-stack tags, and
 * a GitHub link.
 */
function ProjectCard({ project }: ProjectCardProps) {
  const { slug, name, description, bullets, tech, githubRepo, hasAbout } = project;

  const githubUrl = `https://github.com/${GITHUB_USERNAME}/${githubRepo}`;

  return (
    <article className='flex flex-col gap-4 rounded-lg border border-[var(--color-surface)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]'>
      {/* Project name — link to detail page only when hasAbout is true */}
      {hasAbout ? (
        <Link
          to={`projects/${slug}/`}
          className='text-xl font-semibold text-[var(--color-text)] transition-all hover:text-[var(--color-accent)] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.4)]'
        >
          {name}
        </Link>
      ) : (
        <h3 className='text-xl font-semibold text-[var(--color-text)]'>{name}</h3>
      )}

      {/* Description */}
      <p className='text-sm leading-relaxed text-[var(--color-muted)]'>{description}</p>

      {/* Bullet points */}
      <ul className='flex list-disc flex-col gap-1.5 pl-4 marker:text-[var(--color-accent)]'>
        {bullets.map((bullet) => (
          <li key={bullet} className='text-sm leading-relaxed text-[var(--color-muted)]'>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech-stack tags */}
      <div className='mt-auto flex flex-wrap gap-2 pt-2'>
        {tech.map((tag) => (
          <span
            key={tag}
            className='rounded border border-[var(--color-accent)] px-2 py-0.5 text-xs font-medium text-[var(--color-accent)]'
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <Link
        to={githubUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`${name} on GitHub`}
        className='inline-flex w-fit items-center gap-1.5 text-sm text-[var(--color-muted)] transition-all hover:text-[var(--color-accent)] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.4)]'
      >
        GitHub →
      </Link>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Section: Projects
// ---------------------------------------------------------------------------

/**
 * Projects section component.
 *
 * Renders all portfolio projects as a responsive grid of {@link ProjectCard}
 * elements. The section is anchored at `#projects` for in-page navigation.
 *
 * @example
 * ```tsx
 * <Projects />
 * ```
 */
export function Projects() {
  return (
    <section id='projects' className='px-4 py-20'>
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
          Projects
        </motion.h2>

        {/* Card grid */}
        <div className='grid gap-6 sm:grid-cols-2'>
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUpVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
